import common from "@/resources/common.module.css";
import Date from "@/app/component/Date";
import Input from "@/app/component/Input";

export default function sale() {
    return (
        <>
            <div className={common.saleContainer}>
                <div className={common.pageTitleWrap}>
                    <h2>매출 조회</h2>
                </div>
                <div className={common.saleSrchContainer}>
                    <div className={common.saleSrchWrap}>
                        <div className={common.srchListWrap}>
                            <ul className={common.srchList}>
                                <li className={[common.srch, common.full].join(' ')}>
                                    <Date name={"날짜"}/>
                                </li>
                            </ul>
                            <button className={common.inq}>조회</button>
                        </div>
                        <div className={common.historyWrap}>
                            <div className={common.history}>
                                <p className={common.historyNm}>주문 수</p>
                                <p className={common.historyVal}>452</p>
                            </div>
                            <div className={common.history}>
                                <p className={common.historyNm}>판매 수량</p>
                                <p className={common.historyVal}>601</p>
                            </div>
                            <div className={common.history}>
                                <p className={common.historyNm}>전체 판매가</p>
                                <p className={common.historyVal}>10,058,600</p>
                            </div>
                        </div>
                    </div>
                    <div className={common.saleSrchWrap}>
                        <div className={common.srchListWrap}>
                            <ul className={common.srchList}>
                                <li className={[common.srch, common.full].join(' ')}>
                                    <Input name={"상품"} type={"text"}/>
                                </li>
                            </ul>
                            <button className={common.inq}>조회</button>
                        </div>
                        <div className={common.historyWrap}>
                            <div className={common.saleTableWrap}>
                                <div className={common.saleTableHead}>
                                    <p>상품명</p>
                                    <p>판매 수</p>
                                </div>
                                <ul className={common.saleTable}>
                                    <li className={common.saleList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품명*/}
                                        <p>207</p>
                                    </li>
                                    <li className={common.saleList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품명*/}
                                        <p>207</p>
                                    </li>
                                    <li className={common.saleList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품명*/}
                                        <p>207</p>
                                    </li>
                                    <li className={common.saleList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품명*/}
                                        <p>207</p>
                                    </li>
                                    <li className={common.saleList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품명*/}
                                        <p>207</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={common.historyContainer}>
                    <h3>매출 내역</h3>
                    <div className={common.saleHistoryWrap}>
                        <div className={common.saleHistory}>
                            <p>오늘</p>
                            <div className={common.historyWrap}>
                                <div className={common.history}>
                                    <p className={common.historyNm}>주문 수</p>
                                    <p className={common.historyVal}>452</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>판매 수량</p>
                                    <p className={common.historyVal}>601</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>전체 판매가</p>
                                    <p className={common.historyVal}>10,058,600</p>
                                </div>
                            </div>
                        </div>
                        <div className={common.saleHistory}>
                            <p>당월</p>
                            <div className={common.historyWrap}>
                                <div className={common.history}>
                                    <p className={common.historyNm}>주문 수</p>
                                    <p className={common.historyVal}>452</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>판매 수량</p>
                                    <p className={common.historyVal}>601</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>전체 판매가</p>
                                    <p className={common.historyVal}>10,058,600</p>
                                </div>
                            </div>
                        </div>
                        <div className={common.saleHistory}>
                            <p>올해</p>
                            <div className={common.historyWrap}>
                                <div className={common.history}>
                                    <p className={common.historyNm}>주문 수</p>
                                    <p className={common.historyVal}>452</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>판매 수량</p>
                                    <p className={common.historyVal}>601</p>
                                </div>
                                <div className={common.history}>
                                    <p className={common.historyNm}>전체 판매가</p>
                                    <p className={common.historyVal}>10,058,600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}