"use client";

import axios from "axios";
import common from "@/resources/common.module.css";
import Input from "@/app/component/Input";
import Image from "next/image";

export default function my() {
  return (
    <>
      <div className={common.pageTitleWrap}>
        <h2>가게 정보</h2>
        <button className={common.pageBtn}>수정</button>
      </div>

      <div
        className={common.storeContent}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          marginTop: 0,
        }}
      >
        <div
          className={common.storeLayout}
          style={{ alignItems: "first baseline", justifyContent: "center" }}
        >
          <div className={common.storeImg}>
            {/*<input type="file"/>*/}
            <Image src={""} alt={"가게 사진"} />
          </div>
          <div
            className={common.storeInptWrap}
            style={{ gap: "30px", width: "400px" }}
          >
            <input
              type="text"
              className={common.inpt}
              placeholder="이름"
              //   style={{
              //     backgroundColor: "",
              //     ,
              //     ,
              //     ,,

              //   }}
            ></input>
            <input
              type="text"
              className={common.inpt}
              placeholder="이메일"
            ></input>
            <input
              type="text"
              className={common.inpt}
              placeholder="비밀번호"
            ></input>
            <input
              type="text"
              className={common.inpt}
              placeholder="전화번호"
            ></input>
            <input
              type="text"
              className={common.inpt}
              placeholder={"기본 주소"}
            />
            <input
              type="text"
              className={common.inpt}
              placeholder={"상세 주소"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
