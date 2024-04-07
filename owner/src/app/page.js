"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
  const router = useRouter();
  const test = () => {
    if(localStorage.getItem('OWNER_ID') == null) return router.replace("/auth/signin");
    else return router.replace("/ord");
  }

  useEffect(() => {
    test();
  }, []);
  return (
      <>

      </>
  )
}