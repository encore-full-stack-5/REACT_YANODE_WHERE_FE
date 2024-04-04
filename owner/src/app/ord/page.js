import common from "@/resources/common.module.css";
import Date from "@/app/component/Date";
import Input from "@/app/component/Input";

export default function ord() {
    return (
        <>
            <div>
                <div className={common.pageTitleWrap}>
                    <h2>주문 접수<span>3</span></h2>
                </div>
                <div className={common.ordTableWrap}>
                    <div className={common.ordTableHead}>
                        <p>주문ID</p>
                        <p>상품명</p>
                        <p>고객명</p>
                        <p>주문일시</p>
                    </div>
                    <ul className={common.ordTable}>
                        <li className={common.ordList}>
                            {/*주문ID*/}
                            <p>1</p>
                            {/*상품명*/}
                            <p>평양 물냉면</p>
                            {/*고객명*/}
                            <p>박미람</p>
                            {/*주문일시*/}
                            <p>2024-04-03 17:48:33</p>
                        </li>
                    </ul>
                </div>

                {/*주문 내역 조회*/}
                <h4 className={common.subTitle}>주문 내역</h4>
                <div className={common.srchListWrap}>
                    <ul className={common.srchList}>
                        <li className={common.srch}>
                            <Date name={"주문일자"}/>
                        </li>
                        <li className={common.srch}>
                            <Input name={"주문번호"} type={"text"}/>
                        </li>
                    </ul>
                    <button className={common.inq}>조회</button>
                </div>
                <div className={common.ordTableWrap}>
                    <div className={common.ordTableHead}>
                        <p>주문ID</p>
                        <p>상품명</p>
                        <p>고객명</p>
                        <p>주문일시</p>
                        <p>주문상태</p>
                    </div>
                    <ul className={common.ordTable}>
                        <li className={common.ordList}>
                            {/*주문ID*/}
                            <p>1</p>
                            {/*상품명*/}
                            <p>평양 물냉면</p>
                            {/*고객명*/}
                            <p>박미람</p>
                            {/*주문일시*/}
                            <p>2024-04-03 17:48:33</p>
                            {/*주문상태*/}
                            <p>결제완료</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}