"use client";

import axios from "axios";
import common from "@/resources/common.module.css";
import Image from "next/image";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";
import { useEffect, useState } from "react";
import MenuDtl from "@/app/menu/menuDtl/page";
export default function menu() {
  // state
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // function
  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://192.168.80.39:3001/owners/products/7"
      );
      setData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
  };

  const menuState = (el) => {
    /*판매 > SOLDOUT_YN == N , EXPSR_YN == N
    품절 > SOLDOUT_YN == Y , EXPSR_YN == N
    숨김 > SOLDOUT_YN == N , EXPSR_YN == Y*/
    if (el.SOLDOUT_YN === "0" && el.EXPSR_YN === "1") return "판매";
    if (el.SOLDOUT_YN === "1") return "품절";
    if (el.EXPSR_YN === "0") return "숨김";
  };

  const clickModal = () => {
    setShowModal(!showModal);
  };

  // useEffect
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      {console.log(data)}
      <div>
        <div className={common.pageTitleWrap}>
          <h2>메뉴 등록</h2>
          <button className={common.pageBtn}>추가</button>
        </div>
        {/* 필터 */}
        <div className={common.menuFilter}>
          <button className={common.on}>전체</button>
          <button>품절 메뉴</button>
          <button>숨긴 메뉴</button>
        </div>
        {/* 리스트 */}
        <ul className={common.menuList}>
          {data.map((el, index) => (
            <li key={index} className={common.menu} onClick={clickModal}>
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

      {showModal && <MenuDtl clickModal={clickModal} />}
    </>
  );
}
