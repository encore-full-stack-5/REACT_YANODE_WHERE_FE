"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import common from "@/resources/common.module.css";
import Input from "@/app/component/Input";
import mycss from "@/resources/my.module.css";

export default function my() {
  const [data, setData] = useState([]);

  const getdata = async () => {
      try {
          const response = await axios.get(
              "http://220.78.7.18:3001/users/profile/11"//+localStorage.getItem("CUST_ID")
          );
          console.log(response.data);
          setData(response.data[0]);
      } catch (error) {
      }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className={common.pageTitleWrap}>
        <h2 className={mycss.pagetitle}>내 정보</h2>
        <button className={common.pageBtn}>수정</button>
      </div>

      <div className={mycss.storeContent}>
        <div className={mycss.storeLayout}>
          <div className={mycss.storeInptWrap}>
            <Input name={"이름"} type={"text"}
              defaultValue={data?data.CUST_NM:"이름"} />
            <Input name={"이메일"} type={"email"} 
              defaultValue={data?data.EMAIL:"이메일"} />
            <Input name={"전화번호"} type={"tel"} 
              defaultValue={data?data.TELNO:"전화번호"} />
            <Input name={"기본주소"} type={"text"} 
              defaultValue={data?data.BSC_ADDR:"기본주소"} />
            <Input name={"상세주소"} type={"text"} 
              defaultValue={data?data.DTL_ADDR:"상세주소"} />
            <Input name={"생년월일"} type={"date"} 
              defaultValue={data?data.BRTHDAY?.substr(0,10):""} />
          </div>
        </div>
      </div>
    </>
  );
}
