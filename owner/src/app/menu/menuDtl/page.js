import common from "@/resources/common.module.css";
import Image from "next/image";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";
import {useEffect, useState} from "react";

export default function menuDtl(props) {
  // props
  const { clickModal, menuDtl } = props;

  // state
  const [status, setStatus] = useState("");

  //function
  const menuStatus = () => {
    if (menuDtl.SOLDOUT_YN === "0" && menuDtl.EXPSR_YN === "1") setStatus("1");
    if (menuDtl.SOLDOUT_YN === "1") setStatus("2");
    if (menuDtl.SOLDOUT_YN === "0" && menuDtl.EXPSR_YN === "0") setStatus("3");
  }
  const chageStatusSelect = () => {
    const status = document.getElementById("status");
    return setStatus(status.value);
  }

  useEffect(() => {
    menuStatus();
  }, []);

  return (
    <>
      <div className={common.popupContainer}>
        <div className={common.popupContent}>
          <div className={common.popupTitle} style={{ width: "300px" }}>
            <h3>메뉴 수정/등록</h3>
            <button className={common.close} onClick={clickModal}>
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
            <Input name={"메뉴명"} type={"text"} defaultValue={menuDtl.GDS_NM}/>
            <Textarea name={"메뉴설명"} defaultValue={menuDtl.GDS_DESC}/>
            <Input name={"메뉴가격"} type={"number"} defaultValue={menuDtl.GDS_PRC}/>
            <div className={common.inptWrap}>
              {/*옵션*/}
              <label>
                메뉴 옵션<span className={common.num}>1</span>
              </label>
              <input type="text" className={common.inpt} placeholder="옵션명" />
              <input
                type="number"
                className={common.inpt}
                placeholder="옵션 가격"
              />
              {/*여기까지*/}
              <button className={common.optnAdd}>
                <p>+</p>
              </button>
            </div>
          </div>
          <div className={common.menuSet}>
            <div className={common.setSelect}>
              <div className={common.inptWrap}>
                <label>메뉴 상태</label>
                <select id={"status"} value={status} onChange={() => chageStatusSelect()}>
                  <option value="1">판매</option>
                  <option value="2">품절</option>
                  <option value="3">숨김</option>
                </select>
              </div>
              <button className={common.del}>삭제</button>
            </div>
            <button className={common.sav}>저장</button>
          </div>
        </div>
      </div>
    </>
  );
}
