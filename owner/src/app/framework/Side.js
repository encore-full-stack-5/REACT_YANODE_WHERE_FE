"use client";

import framework from "/src/resources/framework.module.css";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Side() {
  // state
  const [data, setData] = useState([]);
  const router = useRouter();
  const [status, setStatus] = useState("storeInfo");

  // function
  // 주문 조회
  const getData = async () => {
    try {
      const response = await axios.get(
          "http://220.78.7.18:3001/owners/orders/25"
      );
      setData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
  };

  // useEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={framework.sideWrap}>
        <div>
          {/* 로고 이미지 넣기 */}
          <p className={framework.logo}>
            <span>W</span>here?
          </p>
          <div className={framework.userInfo}>
            <p className={framework.userNm}>
              <b>야노드</b>님
            </p>
            <p className={framework.userId}>yanode00</p>
          </div>
        </div>

        {/* 메뉴 */}
        <ul className={framework.sideList}>
          {/* <li
            onClick={() => {
              setStatus("dashBoard");
              router.push("/");
            }}
            className={[
              framework.side,
              status === "dashBoard" ? framework.on : "",
            ].join(" ")}
            id={"dashboard"}
          >
            대시보드
          </li> */}
          <li
            onClick={() => {
              setStatus("storeInfo");
              router.push("/store");
            }}
            className={[
              framework.side,
              status === "storeInfo" ? framework.on : "",
            ].join(" ")}
            id={"store"}
          >
            가게 정보
          </li>
          <li
            onClick={() => {
              setStatus("menu");
              router.push("/menu");
            }}
            className={[
              framework.side,
              status === "menu" ? framework.on : "",
            ].join(" ")}
            id={"menu"}
          >
            메뉴 등록
          </li>
          <li
            onClick={() => {
              setStatus("ord");
              router.push("/ord");
            }}
            className={[
              framework.side,
              status === "ord" ? framework.on : "",
            ].join(" ")}
            id={"ord"}
          >
            주문 접수<span>{data.filter(el => el.ORD_STATE === 100).length}</span>
          </li>
          <li
            onClick={() => {
              setStatus("sale");
              router.push("/sale");
            }}
            className={[
              framework.side,
              status === "sale" ? framework.on : "",
            ].join(" ")}
            id={"sale"}
          >
            매출 조회
          </li>
          <li
            onClick={() => {
              setStatus("my");
              router.push("/my");
            }}
            className={[
              framework.side,
              status === "my" ? framework.on : "",
            ].join(" ")}
            id={"my"}
          >
            내 정보
          </li>
        </ul>
        <div className={framework.logoutWrap}>
          <button className={framework.logout}>
            {/* 로그아웃 이미지 자리 */}
            <p>Log out</p>
          </button>
        </div>
      </div>
    </>
  );
}
