"use client";

import framework from "@/resources/framework.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Side() {
  const router = useRouter();
  const [cust_id, setId] = useState();
  const [status, setStatus] = useState("store");

  useEffect(() => {
    setId(localStorage.getItem("CUST_ID"));
  }, [cust_id]);

  return cust_id ? (
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
          <li
            className={[
              framework.side,
              status === "store" ? framework.on : "",
            ].join(" ")}
            onClick={() => {
              setStatus("store");
              router.push("/store");
            }}
            id={"store"}
          >
            매장 찾기
          </li>
          <li
            className={[
              framework.side,
              status === "ord" ? framework.on : "",
            ].join(" ")}
            onClick={() => {
              setStatus("ord");
              router.push("/ord");
            }}
            id={"ord"}
          >
            나의 주문
          </li>
          <li
            className={[
              framework.side,
              status === "name" ? framework.on : "",
            ].join(" ")}
            onClick={() => {
              setStatus("name");
              router.push("/my");
            }}
            id={"name"}
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
                localStorage.removeItem("CUST_ID");
                router.push("/signin");
              }}
            >
              Log out
            </p>
          </button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
