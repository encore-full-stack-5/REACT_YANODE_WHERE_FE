import common from "/src/resources/common.module.css";
import axios from "axios";
import Image from "next/image";
import Input from "/src/app/component/Input";
import Textarea from "/src/app/component/Textarea";
import { useEffect, useState } from "react";
const obj = {
  name: "",
  price: "",
};
export default function menuDtl(props) {
  // props
  const { clickMenuDtl, menuDtl} = props;
  const [options, setOptions] = useState();

  // state
  const [selectOption, setOPtion] = useState("");

  const getOption = async () => {

  }

  useEffect(() => {
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
              name={"메뉴설명"}
              defaultValue={menuDtl.GDS_DESC}
              readOnly
            />
            <Input
              id={"menuPrice"}
              name={"메뉴가격"}
              type={"text"}
              defaultValue={menuDtl.GDS_PRC + "원"}
              readOnly
            />
            <div className={common.inptWrap}>



              {/* {option.map((el, index) => ( */}
                <div className={common.optionWrap}>
                  <div className={common.deleteOption}>
                    <label>
                      메뉴 옵션<span className={common.num}>{1}</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className={common.inpt}
                    placeholder="옵션명"
                    defaultValue={"el.title"}
                    name="title"
                  />
                  <input
                    type="number"
                    className={common.inpt}
                    placeholder="옵션 가격"
                    defaultValue={"el.price"}
                    name="price"
                  />
                </div>
              {/* ))} */}



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
              // onClick={() => clickSave()}
            >
              {menuDtl.GDS_SOLDOUT_YN==1? "품절" : "주문 하기"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
