"use client";

import framework from "/src/resources/framework.module.css";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Side() {
  const router = useRouter();
  // state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("ord");

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
    {/* <button onClick={console.log(LocalStorage.getItem('OWNER_ID'))}>asfd</button> */}
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
              setStatus("store");
                (localStorage.getItem('OWNER_ID') == null)
                    ? router.push("/auth/signin")
                    : router.push("/store")
            }}
            className={[
              framework.side,
              status === "store" ? framework.on : "",
            ].join(" ")}
            id={"store"}
          >
            가게 정보
          </li>
          <li
            onClick={() => {
              setStatus("menu");
              (localStorage.getItem('OWNER_ID') == null)
                  ? router.push("/auth/signin")
                  : router.push("/menu")
            }}
            className={[
              framework.side,
              status === "menu" ? framework.on : "",
            ].join(" ")}
          >
            메뉴 등록
          </li>
          <li
            onClick={() => {
              setStatus("ord");
              (localStorage.getItem('OWNER_ID') == null)
                  ? router.push("/auth/signin")
                  : router.push("/ord")
            }}
            className={[
              framework.side,
              status === "ord" ? framework.on : "",
            ].join(" ")}
          >
            주문 접수<span>{data.filter(el => el.ORD_STATE === 100).length}</span>
          </li>
          {/*<li*/}
          {/*  onClick={() => {*/}
          {/*    setStatus("sale");*/}
          {/*    onClickMenu();*/}
          {/*  }}*/}
          {/*  className={[*/}
          {/*    framework.side,*/}
          {/*    status === "sale" ? framework.on : "",*/}
          {/*  ].join(" ")}*/}
          {/*>*/}
          {/*  매출 조회*/}
          {/*</li>*/}
          <li
            onClick={() => {
              setStatus("my");
              (localStorage.getItem('OWNER_ID') == null)
                  ? router.push("/auth/signin")
                  : router.push("/my")
            }}
            className={[
              framework.side,
              status === "my" ? framework.on : "",
            ].join(" ")}
          >
            내 정보
          </li>
        </ul>
        <div className={framework.logoutWrap}>
          <button className={framework.logout}>
            {/* 로그아웃 이미지 자리 */}
            <p
              onClick={() => {
                alert("로그아웃이 완료되었습니다.");
                localStorage.removeItem('OWNER_ID');
                router.replace("/");
                setStatus("ord");
              }}
            >
              Log out
            </p>
          </button>
        </div>
      </div>
    </>
  );
}