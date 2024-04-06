"use client";

import framework from "@/resources/framework.module.css";
import { useRouter } from "next/navigation";

export default function Side() {
  const router = useRouter();

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
          <li
            className={[framework.side, framework.on].join(" ")}
            onClick={() => router.push("/store")}
            id={"store"}
          >
            매장 찾기
          </li>
          <li
            className={[framework.side].join(" ")}
            onClick={() => router.push("/ord")}
            id={"ord"}
          >
            나의 주문
          </li>
          <li
            className={[framework.side].join(" ")}
            onClick={() => router.push("/my")}
            id={"name"}
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
