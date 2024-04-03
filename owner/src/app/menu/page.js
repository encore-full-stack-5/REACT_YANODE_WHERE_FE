import common from "@/resources/common.module.css";
import Image from "next/image";

export default function menu() {
    return (
        <>
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
                    <li className={common.menu}>
                        <div className={common.menuImg}>
                            {/*<Image src={} alt={}/>*/}
                            <span>메뉴 사진</span>
                        </div>
                        <p className={common.menuNm}>함흥 비빔냉면</p>
                        <p className={common.menuDesc}>함흥은 비냉이지~</p>
                        <div className={common.menuOpt}>
                            <p>옵션 개수</p>
                            <p>5</p>
                        </div>
                        <div className={common.menuYn}>
                            <p>메뉴 상태</p>
                            <p>품절</p>
                        </div>
                        <p className={common.menuPrc}>18,000</p>
                    </li>
                    <li className={common.menu}>
                        <div className={common.menuImg}>
                            {/*<Image src={} alt={}/>*/}
                            <span>메뉴 사진</span>
                        </div>
                        <p className={common.menuNm}>닭강정</p>
                        <p className={common.menuDesc}>닭강정 맛있어</p>
                        <div className={common.menuOpt}>
                            <p>옵션 개수</p>
                            <p>10</p>
                        </div>
                        <div className={common.menuYn}>
                            <p>메뉴 상태</p>
                            <p>숨김</p>
                        </div>
                        <p className={common.menuPrc}>20,000</p>
                    </li>
                    <li className={common.menu}>
                        <div className={common.menuImg}>
                            {/*<Image src={} alt={}/>*/}
                            <span>메뉴 사진</span>
                        </div>
                        <p className={common.menuNm}>헤이즐넛 커피</p>
                        <p className={common.menuDesc}>매머드에서 공수해 온 헤이즐넛 커피이다.</p>
                        <div className={common.menuOpt}>
                            <p>옵션 개수</p>
                            <p>15</p>
                        </div>
                        <div className={common.menuYn}>
                            <p>메뉴 상태</p>
                            <p>판매</p>
                        </div>
                        <p className={common.menuPrc}>2,400</p>
                    </li>
                    <li className={common.menu}>
                        <div className={common.menuImg}>
                            {/*<Image src={} alt={}/>*/}
                            <span>메뉴 사진</span>
                        </div>
                        <p className={common.menuNm}>대국민 미술작가 오디션 MBN 화100</p>
                        <p className={common.menuDesc}>나도 화100?! 이벤트 QR코드 찍고 컵아트 화가 데뷔? 3월 23일부터 매주 토요일 17시</p>
                        <div className={common.menuOpt}>
                            <p>옵션 개수</p>
                            <p>15</p>
                        </div>
                        <div className={common.menuYn}>
                            <p>메뉴 상태</p>
                            <p>판매</p>
                        </div>
                        <p className={common.menuPrc}>2,400</p>
                    </li>
                </ul>
            </div>
        </>
    )
}