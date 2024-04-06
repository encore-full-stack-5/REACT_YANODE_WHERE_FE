"use client";
import axios from "axios";
import common from "@/resources/common.module.css";
import Input from "@/app/component/Input";
import Image from "next/image";
import mycss from "@/resources/my.module.css";

export default function my() {
  return (
    <>
      <div className={common.pageTitleWrap}>
        <h2 className={mycss.pagetitle}>내 정보</h2>
        <button className={common.pageBtn}>수정</button>
      </div>

      <div className={mycss.storeContent}>
        <div className={mycss.storeLayout}>
          <div className={mycss.storeImg}>
            {/*<input type="file"/>*/}
            <Image src={""} alt={"가게 사진"} />
          </div>
          <div className={mycss.storeInptWrap}>
            <Input name={"이름"} type={"text"} placeholder="이름" />

            <Input name={"이메일"} type={"email"} placeholder="이메일"></Input>
            <Input name={"비밀번호"} type={"password"} placeholder="비밀번호" />
            <Input name={"전화번호"} type={"tel"} placeholder="전화번호" />
            <Input name={"기본주소"} type={"text"} placeholder="기본주소" />
            <Input name={"상세주소"} type={"password"} placeholder="상세주소" />
          </div>
        </div>
      </div>
    </>
  );
}
