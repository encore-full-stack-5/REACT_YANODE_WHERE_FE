"use client"

import common from "/src/resources/common.module.css";
import Input from "/src/app/component/Input";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ordDtl(props) {
    const { clickOrd } = props;
    const { ord_id } = props;
    const [data, setData] = useState([]);
    const [dataOpt, setDataOpt] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                "http://192.168.80.39:3001/users/orders/"+ord_id+"/details"
            );
            setData(response.data[0]);
        } catch (error) {
        }
    };
    const putData = async (req, res) => {
        try {
            const response = await axios.put(
                "http://192.168.80.39:3001/users/orders/status",
                {
                    data: [
                        data.ORD_GDS_ID,
                        data.ORD_STATE = 600
                    ]
                }
            );
            console.log(response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getOptionData = async () => {
        try {
            const response = await axios.get(
                "http://192.168.80.39:3001/users/orders/"+ord_id+"/details/options"
            );
            console.log(response.data);
            setDataOpt(response.data);
        } catch (error) {
        alert("조회 에러");
        }
    };

    useEffect(() => {
        getData();
        getOptionData();
    }, []);

    return (
        <>
            <div>
                <div className={common.popupContainer}>
                    <div className={common.popupContent} style={{ width: '80%'}}>
                        <div className={common.popupTitle}>
                            <h3>주문 상세</h3>
                            <button className={common.close} onClick={clickOrd}>
                                ×
                            </button>
                        </div>
                        <div className={common.ordFormWrap}>
                            <h4 className={common.subTitle}>주문 정보</h4>
                            <div className={common.ordForm}>
                                <Input name={"주문번호"} value={ord_id} readOnly />
                                <div className={common.inptWrap}>
                                    <label>가게이름</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.SHOP_NM):""}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>주문 일시</label>
                                    <input
                                        type="datetime-local"
                                        className={common.inpt}
                                        defaultValue={data?(data.ORD_DT?.substr(0,16)):""}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <h4 className={common.subTitle}>배송 정보</h4>
                            <div className={common.ordForm}>
                                <div className={common.inptWrap}>
                                    <label>우편번호</label>
                                    <input
                                        type="number"
                                        className={common.inpt}
                                        defaultValue={data?(data.RCVR_ZIPN):""}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>기본주소</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.RCVR_BSC_ADDR):""}
                                        readOnly
                                    />
                                </div>
                                <div className={common.inptWrap}>
                                    <label>상세주소</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.RCVR_DTL_ADDR):""}
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
                                    {dataOpt?(dataOpt.map((e,i)=>
                                        <li 
                                            key={i}
                                            className={common.ordList}
                                        >
                                            {/*상품명*/}
                                            <p>{e.GDS_NM}</p>
                                            {/*상품 가격*/}
                                            <p>{e.GDS_PRC}</p>
                                            {/*옵션명*/}
                                            <p>{e.OPTION_NM !== null ? e.OPTION_NM : "-"}</p>
                                            {/*옵션 가격*/}
                                            <p>{e.OPTION_PRC !== null ? e.OPTION_PRC : "0"}</p>
                                            {/*수량*/}
                                            <p>{e.GDS_QTY}</p>
                                        </li>
                                    )):""}
                                </ul>
                            </div>
                            <div className={common.ordForm}>
                                <div className={common.inptWrap}>
                                    <label>전체 주문 수량</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.ORD_TQTY):""}
                                        readOnly
                                    />
                                </div>
                                <div className={[common.inptWrap, common.prc].join(' ')}>
                                    <label>전체 주문 판매가</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.ORD_TPRC):""}
                                        readOnly
                                    />
                                </div>
                                <div className={[common.inptWrap, common.prc].join(' ')}>
                                    <label>배송비</label>
                                    <input
                                        type="text"
                                        className={common.inpt}
                                        defaultValue={data?(data.DLV_PRC):""}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <button className={common.ordBtn} onClick={putData}>주문 취소</button>
                    </div>
                </div>
            </div>
        </>
    )
}