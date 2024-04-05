"use client";

import axios from "axios";
import common from "@/resources/common.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuDtl from "@/app/menu/menuDtl/page";
export default function menu() {
  // state
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [menuDtl, setMenuDtl] = useState();
  const [status, setStatus] = useState("SALE");

  // function
  // 메뉴 조회
  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://192.168.80.39:3001/owners/products/13"
      );
      setData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
  };

  // 메뉴 상태
  const menuState = (el) => {
    if (el.SOLDOUT_YN === "0" && el.EXPSR_YN === "1") return "판매";
    if (el.SOLDOUT_YN === "1" && el.EXPSR_YN === "1") return "품절";
    if (el.EXPSR_YN === "0" && el.EXPSR_YN === "0") return "숨김";
  };
  // 메뉴 필터
  const menuFilter = (el) => {
    if (status === "SALE") return el.SOLDOUT_YN === "0" && el.EXPSR_YN === "1";
    if (status === "SOLDOUT") return el.SOLDOUT_YN === "1";
    if (status === "HIDDEN")
      return el.SOLDOUT_YN === "0" && el.EXPSR_YN === "0";
  };

  const clickModal = (el) => {
    setShowModal(!showModal);
    setMenuDtl(el);
  };

  // useEffect
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div>
        <div className={common.pageTitleWrap}>
          <h2>메뉴 등록</h2>
          <button className={common.pageBtn} onClick={clickModal}>
            추가
          </button>
        </div>
        {/* 필터 */}
        <div className={common.menuFilter}>
          <button
            onClick={() => setStatus("SALE")}
            className={status === "SALE" ? common.on : ""}
          >
            판매 중
          </button>
          <button
            onClick={() => setStatus("SOLDOUT")}
            className={status === "SOLDOUT" ? common.on : ""}
          >
            품절 메뉴
          </button>
          <button
            onClick={() => setStatus("HIDDEN")}
            className={status === "HIDDEN" ? common.on : ""}
          >
            숨긴 메뉴
          </button>
        </div>
        {/* 리스트 */}
        <ul className={common.menuList}>
          {data
            .filter((el) => menuFilter(el))
            .map((el, index) => (
              <li
                key={index}
                className={common.menu}
                onClick={() => clickModal(el)}
              >
                <div className={common.menuImg}>
                  {/*<Image src={} alt={}/>*/}
                  <span>메뉴 사진</span>
                </div>
                <p className={common.menuNm}>{el.GDS_NM}</p>
                <p className={common.menuDesc}>{el.GDS_DESC}</p>
                <div className={common.menuOpt}>
                  <p>옵션 개수</p>
                  <p>2</p>
                </div>
                <div className={common.menuYn}>
                  <p>메뉴 상태</p>
                  <p>{menuState(el)}</p>
                </div>
                <p className={common.menuPrc}>
                  {el.GDS_PRC.toLocaleString("ko-KR")}
                </p>
              </li>
            ))}
        </ul>
      </div>

      {showModal && <MenuDtl clickModal={clickModal} menuDtl={menuDtl} />}
    </>
  );
}
