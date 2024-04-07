"use client";
import axios from "axios";
import common from "/src/resources/common.module.css";
import Input from "/src/app/component/Input";
import Image from "next/image";
import mycss from "/src/resources/my.module.css";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function my() {
  const router = useRouter();
  // state
  const [data, setData] = useState();
  const getdata = async () => {
    try {
      const response = await axios.get(
        `http://220.78.7.18:3001/owners/profile/${localStorage.getItem('OWNER_ID')}`
      );
      setData(response.data);
    } catch (error) {
      alert("조회 에러");
    }
  };

  // useEffect
  useEffect(() => {
    if(localStorage.getItem('OWNER_ID') == null) return router.replace("/auth/signin");
    else getdata();
  }, []);

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
            <Input maxLength="9" name={"이름"} type={"text"} placeholder="이름" defaultValue={data ? data.OWNER_NM : ""}/>
            <Input maxLength="99" name={"이메일"} type={"email"} placeholder="이메일" defaultValue={data ? data.EMAIL : ""}></Input>
            <Input maxLength="19" name={"비밀번호"} type={"password"} placeholder="비밀번호" defaultValue={data ? data.PASSWD : ""}/>
            <Input onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 12);
                    }}
                    name={"전화번호"} type={"tel"} placeholder="전화번호" defaultValue={data ? data.TELNO : ""}/>
            <Input maxLength="99" name={"기본주소"} type={"text"} placeholder="기본주소" defaultValue={data ? data.BSC_ADDR : ""}/>
            <Input maxLength="99" name={"상세주소"} type={"text"} placeholder="상세주소" defaultValue={data ? data.DTL_ADDR : ""}/>
          </div>
        </div>
      </div>
    </>
  );
}
