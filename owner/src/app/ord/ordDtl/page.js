import common from "@/resources/common.module.css";
import Image from "next/image";
import Input from "@/app/component/Input";

export default function ordDtl() {
    return (
        <>
            <div>
                <div className={common.popupContainer}>
                    <div className={common.popupContent} style={{ width: '80%'}}>
                        <div className={common.popupTitle}>
                            <h3>주문 상세</h3>
                            <button className={common.close}>×</button>
                        </div>
                        <div className={common.ordFormWrap}>
                            <h4 className={common.subTitle}>주문 정보</h4>
                            <div className={common.ordForm}>
                                <Input
                                    name={"주문번호"}
                                    type={"number"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"주문자명"}
                                    type={"text"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"주문일시"}
                                    type={"datetime-local"}
                                    value={""}
                                    readOnly
                                />
                            </div>
                            <h4 className={common.subTitle}>수취인 정보</h4>
                            <div className={common.ordForm}>
                                <Input
                                    name={"수취인명"}
                                    type={"text"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"수취인 전화번호"}
                                    type={"number"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"우편번호"}
                                    type={"number"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"기본주소"}
                                    type={"text"}
                                    value={""}
                                    readOnly
                                />
                                <Input
                                    name={"상세주소"}
                                    type={"text"}
                                    value={""}
                                    readOnly
                                />
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
                                        <p title={"평양 물냉면"}>평양 물냉면</p>
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
                                        <p title={"평양 물냉면"}>평양 물냉면</p>
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
                                        <p title={"평양 물냉면"}>평양 물냉면</p>
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
                                        <p title={"평양 물냉면"}>평양 물냉면</p>
                                        {/*상품 가격*/}
                                        <p>18,000</p>
                                        {/*옵션명*/}
                                        <p>사리 추가</p>
                                        {/*옵션 가격*/}
                                        <p>1,000</p>
                                        {/*수량*/}
                                        <p>1</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={[common.ordForm, common.prc].join(' ')}>
                                <Input
                                    name={"전체 주문 수량"}
                                    type={"text"}
                                    value={"24234"}
                                    readOnly
                                />
                                <Input
                                    name={"전체 주문 판매가"}
                                    type={"text"}
                                    value={"24234"}
                                    readOnly
                                />
                                <Input
                                    name={"배송비"}
                                    type={"text"}
                                    value={"24234"}
                                    readOnly
                                />
                            </div>
                        </div>
                        <button className={common.ordBtn}>주문 접수</button>
                    </div>
                </div>
            </div>
        </>
    )
}