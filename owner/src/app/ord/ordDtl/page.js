import common from "@/resources/common.module.css";
import Image from "next/image";

export default function ordDtl() {
    return (
        <>
            <div>
                <div className={common.popupContainer}>
                    <div className={common.popupContent} style={{ width: '60%'}}>
                        <div className={common.popupTitle}>
                            <h3>주문 상세</h3>
                            <button className={common.close}>×</button>
                        </div>
                        <div className={common.ordFormWrap}>
                            <h4 className={common.subTitle}>주문 정보</h4>
                            <div className={common.ordForm}>
                                <div className={common.inptWrap}>
                                    <label>주문번호</label>
                                    <input
                                        type="number"
                                        className={common.inpt}
                                        value={"1"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>주문자명</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        value={"박미람"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>주문 일시</label>
                                    <input
                                        type="datetime-local"
                                        className={common.inpt}
                                        value={"2024-04-03 17:48:33"}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <h4 className={common.subTitle}>수취인 정보</h4>
                            <div className={common.ordForm}>
                                <div className={common.inptWrap}>
                                    <label>수취인명</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        value={"박미람"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>수취인 전화번호</label>
                                    <input
                                        type="number"
                                        className={common.inpt}
                                        value={"01011112222"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>수취인 우편번호</label>
                                    <input
                                        type="number"
                                        className={common.inpt}
                                        value={"19283"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>수취인 기본주소</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        value={"서울시 중랑구 상봉"}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>수취인 상세주소</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        value={"101호"}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <h4 className={common.subTitle}>주문 상품</h4>
                            <div className={common.ordTableWrap}>
                                <div className={common.ordTableHead}>
                                    <p>상품명</p>
                                    <p>상품 가격</p>
                                    <p>옵션명</p>
                                    <p>추가 가격</p>
                                    <p>수량</p>
                                </div>
                                <ul className={common.ordTable}>
                                    <li className={common.ordList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품 가격*/}
                                        <p>18,000</p>
                                        {/*옵션명*/}
                                        <p>사리 추가</p>
                                        {/*옵션 가격*/}
                                        <p>1,000</p>
                                        {/*수량*/}
                                        <p>1</p>
                                    </li>
                                    <li className={common.ordList}>
                                        {/*상품명*/}
                                        <p>평양 물냉면</p>
                                        {/*상품 가격*/}
                                        <p>18,000</p>
                                        {/*옵션명*/}
                                        <p>사리 추가</p>
                                        {/*옵션 가격*/}
                                        <p>1,000</p>
                                        {/*수량*/}
                                        <p>2</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}