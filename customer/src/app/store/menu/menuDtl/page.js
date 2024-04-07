import common from "@/resources/common.module.css";
import axios from "axios";
import Image from "next/image";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";
import { useEffect, useState } from "react";
const obj = {
  name: "",
  price: "",
};
export default function menuDtl(props) {
  // props
  const { clickMenuDtl, menuDtl, shopId} = props;

  // state
  const [optionData, setOptionData] = useState();
  const [selectOption, setOPtion] = useState("");

  const getOption = async () => {
    try {
      const response = await axios.get(
        "http://220.78.7.18:3001/users/products/menu/" + menuDtl.GDS_ID
      );
      setOptionData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
  }

  const createOrder = async (arr) => {
    const custId = localStorage.getItem("CUST_ID");
    const custNm = localStorage.getItem("CUST_NM");
    const lgnId = localStorage.getItem("LGN_ID");
    const qty = (Number) (document.getElementById("menuQty").value);
    try {
      //주문생성
      const response = await axios.post(
        "http://220.78.7.18:3001/users/orders/new",
        {
          orderData: [
            custId,
            shopId,
            qty,
            menuDtl.GDS_PRC * qty,
            3000,
            custNm,
            custNm,
            1, // '"RCVR_TELNO", '+
            2, // '"RCVR_ZIPN", '+
            3, // '"RCVR_BSC_ADDR", '+
            4, // '"RCVR_DTL_ADDR", '+
            5, // '"WBILL_NO",'+
            10,
            lgnId
          ],
          orderProductData: [
            [
              menuDtl.GDS_ID, //GDS_ID
              menuDtl.GDS_NM,
              menuDtl.GDS_PRC,
              qty
            ],
          ],
          orderOptionData: []
        }
      );
      console.log(response);

    } catch (error) {
      alert("오류 발생");
      console.log(error);
    }
  }

  useEffect(() => {
    getOption()
  }, []);

  return (
    <>
      <div className={common.popupContainer}>
        <div className={common.popupContent} style={{ width: "300px" }}>
          <div className={common.popupTitle}>
            <h3>메뉴 상세 보기</h3>
            <button className={common.close} onClick={clickMenuDtl}>
              ×
            </button>
          </div>
          <div className={common.menuForm}>
            <div className={common.inptWrap}>
              <label>메뉴 사진</label>
              <div className={common.menuImgReg}>
                <Image src={""} alt={"사진 추가"} />
              </div>
            </div>
            <Input
              id={"menuName"}
              name={"메뉴명"}
              type={"text"}
              defaultValue={menuDtl.GDS_NM}
              readOnly
            />
            <Textarea
              id={"menuDescision"}
              name={"메뉴 설명"}
              defaultValue={menuDtl.GDS_DESC}
              readOnly
            />
            <Input
              id={"menuPrice"}
              name={"메뉴 가격"}
              type={"text"}
              defaultValue={menuDtl.GDS_PRC + "원"}
              readOnly
            />
            <div className={common.inptWrap}>

              {optionData?optionData.map((e,i) => 
                <div
                  key={i}
                  className={common.optionWrap}>
                  <div className={common.deleteOption}>
                    <label>
                      메뉴 옵션<span className={common.num}>{i+1}</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className={common.inpt}
                    placeholder="옵션명"
                    defaultValue={e.OPTION_NM}
                    name="title"
                  />
                  <input
                    type="number"
                    className={common.inpt}
                    placeholder="옵션 가격"
                    defaultValue={e.OPTION_PRC}
                    name="price"
                  />
                </div>
              ):""}

            </div>
          </div>
          <div className={common.menuSet}>
            <Input 
              id={"menuQty"}
              name={"수량"}
              type={"number"}
              defaultValue={1}
            />
            <button
              className={common.sav}
              onClick={() => createOrder([])}
            >
              {menuDtl.GDS_SOLDOUT_YN==1? "품절" : "주문 하기"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
