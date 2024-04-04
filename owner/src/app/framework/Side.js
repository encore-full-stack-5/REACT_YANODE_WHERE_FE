'use client'

import framework from '@/resources/framework.module.css';
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Side() {
    const router = useRouter();

    return (
        <>
            <div className={framework.sideWrap}>
                <div>
                    {/* 로고 이미지 넣기 */}
                    <p className={framework.logo}><span>W</span>here?</p>
                    <div className={framework.userInfo}>
                        <p className={framework.userNm}><b>야노드</b>님</p>
                        <p className={framework.userId}>yanode00</p>
                    </div>
                </div>

                {/* 메뉴 */}
                <ul className={framework.sideList}>
                    <li
                        className={[framework.side, framework.on].join(' ')}
                        onClick={() => router.push("/")}
                        id={"dashboard"}
                    >대시보드</li>
                    <li
                        className={[framework.side].join(' ')}
                        onClick={() => router.push("/store")}
                        id={"store"}
                    >가게 정보</li>
                    <li
                        className={[framework.side].join(' ')}
                        onClick={() => router.push("/menu")}
                        id={"menu"}
                    >메뉴 등록</li>
                    <li
                        className={[framework.side].join(' ')}
                        onClick={() => router.push("/ord")}
                        id={"ord"}
                    >주문 접수<span>3</span></li>
                    <li
                        className={[framework.side].join(' ')}
                        onClick={() => router.push("/sale")}
                        id={"sale"}
                    >매출 조회</li>
                    <li
                        className={framework.side}
                        id={"name"}
                    >내 정보</li>
                </ul>
                <div className={framework.logoutWrap}>
                <button className={framework.logout}>
                        {/* 로그아웃 이미지 자리 */}
                        <p>Log out</p>
                    </button>
                </div>
            </div>
        </>
    )
}