"use client"

import axios from 'axios';
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Home() {
  const [list, setList] = useState();
  // const router = useRouter();

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3001/owners/stores/27");
      // const response = await axios.post("http://localhost:3001/owners/stores/0", {
      //   data: [
      //     "13",
      //     "27", 
      //     "있는거 빼고 다 있는 가게", 
      //     "만물상", 
      //     "10200", 
      //     "서울시 종로구 노른자길 44", 
      //     "삐까뻔쩍빌딩 1층", 
      //     "안팝니다~ 돌아가세여~", 
      //     "0001-01-01T10:30:00.000Z", 
      //     "0001-01-01T22:00:00.000Z",
      //     ""
      //   ]
      // })
      // console.log(response.data.rowCount);
      setList(response.data[0]);
    } catch (error) {
      alert('조회 에러');
    }
  }
  
  useEffect(() => {
    getdata();
  }, []);

  return (
      <>
        <p>SHOP_ID: {list?.SHOP_NM}</p>
      </>
  )
}