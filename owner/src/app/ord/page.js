"use client"

import common from "/src/resources/common.module.css";
import Date from "/src/app/component/Date";
import Input from "/src/app/component/Input";
import {useEffect, useState} from "react";
import axios from "axios";
import OrdDtl from "/src/app/ord/ordDtl/page";
import {useRouter} from "next/navigation";

export default function ord() {
    const router = useRouter();
    // state
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [ordDtl, setOrdDtl] = useState();

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

    // 주문상태 한글화
    const ordState = (el) => {
        const state = el.ORD_STATE;
        if (state === 100) return "접수 대기";
        else if (state === 200) return "주문";
        else if (state === 300) return "반품";
        else if (state === 400) return "교환";
        else if (state === 500) return "환불";
        else if (state === 600) return "반려";
    };

    // 주문상세 팝업
    const clickModal = (el) => {
        setShowModal(!showModal);
        setOrdDtl(el);
    };

    // useEffect
    useEffect(() => {
        if(localStorage.getItem('OWNER_ID') == null) return router.replace("/auth/signin");
        else getData();
    }, []);
    return (
        <>
            <div>
                <div className={common.pageTitleWrap}>
                    <h2>주문 접수<span>{data.filter(el => el.ORD_STATE === 100).length}</span></h2>
                </div>
                <div className={common.ordTableWrap}>
                    <div className={common.ordTableHead}>
                        <p>주문ID</p>
                        <p>상품명</p>
                        <p>고객명</p>
                        <p>주문일시</p>
                    </div>
                    <ul className={common.ordTable}>
                        {
                            data
                                .filter(el => el.ORD_STATE === 100)
                                .map((el, i) => (
                                    <li
                                        className={common.ordList}
                                        key={i}
                                        onClick={() => clickModal(el)}>
                                        {/*주문ID*/}
                                        <p>{el.ORD_ID}</p>
                                        {/*상품명*/}
                                        <p>{el.GDS_NM}</p>
                                        {/*고객명*/}
                                        <p>{el.ORDRR_NM}</p>
                                        {/*주문일시*/}
                                        <p>{el.ORD_DT.toString().replace('T', ' ').substring(0, 19)}</p>
                                    </li>
                                ))
                        }
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
                        {
                            data
                                .filter(el => el.ORD_STATE !== 100)
                                .map((el, i) => (
                                    <li
                                        className={common.ordList}
                                        key={i}
                                        onClick={() => clickModal(el)}
                                    >
                                        {/*주문ID*/}
                                        <p>{el.ORD_ID}</p>
                                        {/*상품명*/}
                                        <p>{el.GDS_NM}</p>
                                        {/*고객명*/}
                                        <p>{el.ORDRR_NM}</p>
                                        {/*주문일시*/}
                                        <p>{el.ORD_DT.toString().replace('T', ' ').substring(0, 19)}</p>
                                        {/*주문상태*/}
                                        <p>{ordState(el)}</p>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>

            {showModal && <OrdDtl clickModal={clickModal} ordDtl={ordDtl} ordState={ordState} />}
        </>
    )
}