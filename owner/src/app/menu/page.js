"use client";

import axios from "axios";
import common from "@/resources/common.module.css";
import Image from "next/image";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";
import { useEffect, useState } from "react";

export default function menu() {
  // state
  const [data, setData] = useState([]);

  // function
  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://192.168.80.39:3001/owners/products/31"
      );
      setData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
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
          {}
          <li className={common.menu}>
            <div className={common.menuImg}>
              {/*<Image src={} alt={}/>*/}
              <span>메뉴 사진</span>
            </div>
            <p className={common.menuNm}>평양 물냉면</p>
            <p className={common.menuDesc}>아주아주 맛있음</p>
            <div className={common.menuOpt}>
              <p>옵션 개수</p>
              <p>2</p>
            </div>
            <div className={common.menuYn}>
              <p>메뉴 상태</p>
              <p>판매</p>
            </div>
            <p className={common.menuPrc}>18,000</p>
          </li>
        </ul>
      </div>
    </>
  );
}
