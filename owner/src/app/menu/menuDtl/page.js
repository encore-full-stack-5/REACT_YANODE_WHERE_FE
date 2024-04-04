import common from "@/resources/common.module.css";
import Image from "next/image";
import Date from "@/app/component/Date";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";
import { Teko } from "next/dist/compiled/@next/font/dist/google";

export default function menuDtl(props) {
  const { clickModal } = props;
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
            <Input name={"메뉴명"} type={"text"} />
            <Textarea name={"메뉴설명"} />
            <Input name={"메뉴가격"} type={"number"} />
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
                <select>
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
