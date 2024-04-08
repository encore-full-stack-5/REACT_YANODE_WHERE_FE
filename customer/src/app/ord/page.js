"use client"

import common from "/src/resources/common.module.css";
import Date from "/src/app/component/Date";
import Input from "/src/app/component/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import OrdDtl from "/src/app/ord/ordDtl/page";

export default function ord() {
    const [data, setData] = useState([]);
    const [showOrdId, setShowOrdId] = useState("");

    const getdata = async () => {
        try {
          const response = await axios.get(
            "http://192.168.80.39:3001/users/orders/"+localStorage.getItem("CUST_ID")
          );
          console.log(response.data);
          setData(response.data);
        } catch (error) {
          alert("조회 에러");
        }
      };

    const clickOrd = () => {
        setShowOrdId(showOrdId ? "" : data[0].ORD_ID);
    };
    
    // useEffect
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div>
                <div className={common.pageTitleWrap}>
                    <h2>현재 주문</h2>
                </div>
                <div className={common.ordTableWrap}>
                    <div className={common.ordTableHead}>
                        <p>주문ID</p>
                        <p>상품이름</p>
                        <p>총 수량</p>
                        <p>총 가격</p>
                        <p>매장이름</p>
                        <p>상태</p>
                    </div>
                    <ul className={common.ordTable}>
                        {data?(data.map((e,i)=>
                            <li 
                                key={i}
                                className={common.ordList}
                                onClick={() => setShowOrdId(e.ORD_ID)}
                            >
                                {/*주문ID*/}
                                <p>{e.ORD_ID}</p>
                                {/*상품이름*/}
                                <p>{e.GDS_NM}</p>
                                {/*수량*/}
                                <p>{e.ORD_TQTY}</p>
                                {/*가격*/}
                                <p>{e.ORD_TPRC}</p>
                                {/*매장이름*/}
                                <p>{e.SHOP_NM}</p>
                                {/*상태*/}
                                <p>{e.DLV_STATE}</p>
                            </li>
                        )):""}
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
                        <p>상품이름</p>
                        <p>수량</p>
                        <p>가격</p>
                        <p>매장이름</p>
                        <p>주문일시</p>
                    </div>
                    <ul className={common.ordTable}>
                        <li className={common.ordList}>
                            {/*주문ID*/}
                            <p>1</p>
                            {/*상품명*/}
                            <p>평양 물냉면</p>
                            {/*수량*/}
                            <p>1</p>
                            {/*가격*/}
                            <p>48,580</p>
                            {/*고객명*/}
                            <p>미리암 식당</p>
                            {/*주문일시*/}
                            <p>2024-04-03</p>
                        </li>
                    </ul>
                </div>
            </div>

            {showOrdId && <OrdDtl  clickOrd={clickOrd} ord_id={showOrdId}/>}
        </>
    )
}