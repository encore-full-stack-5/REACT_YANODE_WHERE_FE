"use client";
<<<<<<< HEAD
=======

>>>>>>> d2e39d0ea28df2a362ce741e73a652ccccf16a10
import axios from "axios";
import common from "@/resources/common.module.css";
import Input from "@/app/component/Input";
import Image from "next/image";
<<<<<<< HEAD
import mycss from "@/resources/my.module.css";
=======
>>>>>>> d2e39d0ea28df2a362ce741e73a652ccccf16a10

export default function my() {
  return (
    <>
      <div className={common.pageTitleWrap}>
<<<<<<< HEAD
        <h2 className={mycss.pagetitle}>내 정보</h2>
        <button className={common.pageBtn}>수정</button>
      </div>

      <div className={mycss.storeContent}>
        <div className={mycss.storeLayout}>
          <div className={mycss.storeImg}>
            {/*<input type="file"/>*/}
            <Image src={""} alt={"프로필사진"} />
          </div>
          <div className={mycss.storeInptWrap}>
            <Input name={"이름"} type={"text"} placeholder="이름" />

            <Input name={"이메일"} type={"email"} placeholder="이메일"></Input>
            <Input name={"비밀번호"} type={"password"} placeholder="비밀번호" />
            <Input name={"전화번호"} type={"tel"} placeholder="전화번호" />
            <Input name={"기본주소"} type={"text"} placeholder="기본주소" />
            <Input name={"상세주소"} type={"password"} placeholder="상세주소" />
=======
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
>>>>>>> d2e39d0ea28df2a362ce741e73a652ccccf16a10
          </div>
        </div>
      </div>
    </>
  );
}
