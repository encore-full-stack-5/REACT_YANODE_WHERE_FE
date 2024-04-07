import common from "@/resources/common.module.css";
import Image from "next/image";
import Input from "@/app/component/Input";
import axios from "axios";

export default function ordDtl(props) {
    // props
    const { clickModal, ordDtl, ordState } = props;

    // function
    const putData = async (req, res) => {
        try {
            const response = await axios.put(
                "http://220.78.7.18:3001/owners/orders/status",
                {
                    data: [
                        ordDtl.ORD_GDS_ID,
                        ordDtl.ORD_STATE = 200
                    ]
                }
            );
            console.log(response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onClickOrdAccept = () => {
        putData();
        clickModal();
    }

    return (
        <>
            <div>
                <div className={common.popupContainer}>
                    <div className={common.popupContent} style={{ width: '80%'}}>
                        <div className={common.popupTitle}>
                            <h3>주문 상세 ({ordState(ordDtl)})</h3>
                            <button className={common.close} onClick={clickModal}>×</button>
                        </div>
                        <div className={common.ordFormWrap}>
                            <h4 className={common.subTitle}>주문 정보</h4>
                            <div className={common.ordForm}>
                                <Input
                                    name={"주문번호"}
                                    type={"number"}
                                    value={ordDtl.ORD_ID}
                                    readOnly
                                />
                                <Input
                                    name={"주문자명"}
                                    type={"text"}
                                    value={ordDtl.ORDRR_NM}
                                    readOnly
                                />
                                <Input
                                    name={"주문일시"}
                                    type={"datetime-local"}
                                    value={ordDtl.ORD_DT.substr(0, 16)}
                                    readOnly
                                />
                            </div>
                            <h4 className={common.subTitle}>수취인 정보</h4>
                            <div className={common.ordForm}>
                                <Input
                                    name={"수취인명"}
                                    type={"text"}
                                    value={ordDtl.RCVR_NM}
                                    readOnly
                                />
                                <Input
                                    name={"수취인 전화번호"}
                                    type={"number"}
                                    value={ordDtl.RCVR_TELNO}
                                    readOnly
                                />
                                <Input
                                    name={"우편번호"}
                                    type={"number"}
                                    value={ordDtl.RCVR_ZIPN}
                                    readOnly
                                />
                                <Input
                                    name={"기본주소"}
                                    type={"text"}
                                    value={ordDtl.RCVR_BSC_ADDR}
                                    readOnly
                                />
                                <Input
                                    name={"상세주소"}
                                    type={"text"}
                                    value={ordDtl.RCVR_DTL_ADDR}
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
                                        <p title={ordDtl.GDS_NM}>{ordDtl.GDS_NM}</p>
                                        {/*상품 가격*/}
                                        <p>{ordDtl.GDS_PRC}</p>
                                        {/*옵션명*/}
                                        <p>{ordDtl.OPTION_NM !== null ? ordDtl.OPTION_NM : "-"}</p>
                                        {/*옵션 가격*/}
                                        <p>{ordDtl.OPTION_PRC !== null ? ordDtl.OPTION_PRC : "0"}</p>
                                        {/*수량*/}
                                        <p>{ordDtl.ORD_TQTY}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={[common.ordForm, common.prc].join(' ')}>
                                <Input
                                    name={"전체 주문 수량"}
                                    type={"text"}
                                    value={ordDtl.ORD_TQTY}
                                    readOnly
                                />
                                <Input
                                    name={"전체 주문 판매가"}
                                    type={"text"}
                                    value={(ordDtl.GDS_PRC + ordDtl.OPTION_PRC) * ordDtl.ORD_TQTY}
                                    readOnly
                                />
                                <Input
                                    name={"배송비"}
                                    type={"text"}
                                    value={ordDtl.DLV_PRC}
                                    readOnly
                                />
                            </div>
                        </div>
                        {
                            ordDtl.ORD_STATE === 100
                                ? <button className={common.ordBtn} onClick={onClickOrdAccept}>주문 접수</button>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}