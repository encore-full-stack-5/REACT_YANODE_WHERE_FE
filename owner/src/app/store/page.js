"use client";

import axios from "axios";
import common from "/src/resources/common.module.css";
import Image from "next/image";
import Input from "/src/app/component/Input";
import Textarea from "/src/app/component/Textarea";
import { useEffect, useState } from "react";

export default function store() {
  // state
  const [data, setData] = useState();
  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://220.78.7.18:3001/owners/stores/1"
      );
      setData(response.data[0]);
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
      <div>
        <div className={common.pageTitleWrap}>
          <h2>가게 정보</h2>
          <button className={common.pageBtn}>저장</button>
        </div>
        <div className={common.storeContent}>
          <div className={common.storeLayout}>
            <div className={common.storeImg}>
              {/*<input type="file"/>*/}
              <Image src={""} alt={"가게 사진"} />
            </div>
            <div className={common.storeInptWrap}>
              <Input
                maxLength="29"
                name={"업종"}
                type={"text"}
                defaultValue={data ? data.CTGRY : ""}
              />
              <div className={common.inptWrap}>
                <label>위치</label>
                <input
                  maxLength="99"
                  type="text"
                  className={common.inpt}
                  placeholder={"기본 주소"}
                  defaultValue={data ? data.BSC_ADDR : ""}
                />
                <input
                  maxLength="99"
                  type="text"
                  className={common.inpt}
                  placeholder={"상세 주소"}
                  defaultValue={data ? data.DTL_ADDR : ""}
                />
              </div>
              <Input
                maxLength="29"
                name={"가게 이름"}
                type={"type"}
                defaultValue={data ? data.SHOP_NM : ""}
              />
            </div>
          </div>
          <div className={common.storeLayout}>
            <div className={common.storeInptWrap}>
              <Textarea
                maxLength="254"
                name={"가게 설명"}
                defaultValue={data ? data.SHOP_DESC : ""}
              />
            </div>
          </div>
          <div className={common.storeLayout}>
            <div className={common.storeInptWrap}>
              <div className={common.setTime}>
                <Input
                  name={"OPEN"}
                  type={"time"}
                  defaultValue={data ? data.OPEN_TIME : ""}
                />
                <span>~</span>
                <Input
                  name={"CLOSE"}
                  type={"time"}
                  defaultValue={data ? data.CLOSE_TIME : ""}
                />
              </div>
              <div className={common.inptWrap}>
                <Input
                  name={"전화번호"}
                  type={"number"}
                  placeholder={"숫자만 입력"}
                  defaultValue={data ? data.TELNO : ""}
                  onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 11);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
