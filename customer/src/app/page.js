"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    localStorage.getItem("CUST_ID") ? router.push("/store") : router.push("/signin");
  }, []);
  return (
      <>

      </>
  )
}