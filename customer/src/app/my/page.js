"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import common from "/src/resources/common.module.css";
import Input from "/src/app/component/Input";
import mycss from "/src/resources/my.module.css";

export default function my() {
  const [data, setData] = useState([]);

  const getdata = async () => {
      try {
          const response = await axios.get(
              "http://192.168.80.39:3001/users/profile/11"//+localStorage.getItem("CUST_ID")
          );
          console.log(response.data);
          setData(response.data[0]);
      } catch (error) {
      }
  };

  const setdata = async () => {
    try {
        const response = await axios.post(
            "http://192.168.80.39:3001/users/edit",
            {
              data:[
                localStorage.getItem("CUST_ID"),
                document.getElementById("cname").value,
                document.getElementById("tel").value,
                document.getElementById("zipn").value,
                document.getElementById("bsaddr").value,
                document.getElementById("dtaddr").value,
                document.getElementById("birth").value,
                document.getElementById("email").value
              ]
            }
        );
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" async />

      <div className={common.pageTitleWrap}>
        <h2 className={mycss.pagetitle}>내 정보</h2>
        <button className={common.pageBtn}>수정</button>
      </div>

      <div className={mycss.storeContent}>
        <div className={mycss.storeLayout}>
          <div className={mycss.storeInptWrap}>
            <Input name={"이름"} type={"text"}
              id={"cname"}
              defaultValue={data?data.CUST_NM:"이름"} />

            <Input name={"이메일"} type={"email"} 
              id={"email"}
              defaultValue={data?data.EMAIL:"이메일"} />

            <Input name={"전화번호"} type={"text"} 
              id={"tel"}
              defaultValue={data?data.TELNO:"전화번호"} />

            <Input name={"기본주소"} type={"text"} 
              id={"bsaddr"}
              defaultValue={data?data.BSC_ADDR:"기본주소"}
              onClick={() => new window.daum.Postcode({
                oncomplete: function (data) {
                  document.getElementById("bsaddr").defaultValue = data.roadAddress;
                  document.getElementById("zipn").defaultValue = data.zonecode;
                },
              }).open()}
              readOnly />

            <Input name={"상세주소"} type={"text"} 
              id={"dtaddr"}
              defaultValue={data?data.DTL_ADDR:"상세주소"} />

            <Input name={"우편번호"} type={"text"} 
              id={"zipn"}
              defaultValue={data?data.ZIPN:"우편번호"}
              readOnly />

            <Input name={"생년월일"} type={"date"} 
              id={"birth"}
              defaultValue={data?data.BRTHDAY?.substr(0,10):""} />
              
          </div>
        </div>
      </div>
    </>
  );
}
