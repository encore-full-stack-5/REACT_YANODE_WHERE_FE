"use client"

import axios from 'axios';
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Home() {
  const [list, setList] = useState();
  // const router = useRouter();

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3001/owners/stores/2");
      setList(response.data[0]);
      console.log("킹미람");
    } catch (error) {
      alert('조회 에러');
    }
  }
  
  useEffect(() => {
    getdata();
  }, []);

  return (
      <>
        <p>SHOP_ID: {list?.SHOP_ID}</p>
      </>
  )
}