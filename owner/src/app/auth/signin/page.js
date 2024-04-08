"use client"

import userIcon from "/public/images/person.png";
import emailIcon from "/public/images/email.png";
import passwordIcon from "/public/images/password.png";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import LocalStorage from "/src/app/local/page";
import auth from "/src/resources/auth.module.css";
import common from "/src/resources/common.module.css";

export default function signin() {
  const router = useRouter();
  // state
  const [action, setAction] = useState("Login");
  const [data, setData] = useState();

  const clickLogin = async () => {
    if (action === "Login") {
      try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const response = await axios.post(
          "http://192.168.80.39:3001/owners/login",
          {
            lgn_id: email,
            passwd: password,
          }
        );
        if (response.data !== false) {
          LocalStorage.setItem('OWNER_ID', response.data.OWNER_ID);
          LocalStorage.setItem('OWNER_NM', response.data.OWNER_NM);
          router.push("/ord");
        } else alert("아이디 및 비밀번호를 다시 확인하세요.");
      } catch (error) {
        alert("error");
      }
    } else setAction("Login");
  };

  return (
    <>
      <div className={[auth.container, common.lgn].join(' ')}>
        <div className={auth.header}>
          <div className={auth.text}>{action}</div>
          <div className={auth.underline}></div>
        </div>
        <div className={auth.inputs}>
          {action === "Login" ? (
            <div />
          ) : (
            <div className={auth.input}>
              <Image src={userIcon} alt={""} />
              <input type="text" placeholder="Name"></input>
            </div>
          )}

          <div className={auth.input}>
            <Image src={emailIcon} alt={""} />
            <input id="email" type="email" placeholder="Email"></input>
          </div>
          <div className={auth.input}>
            <Image src={passwordIcon} alt={""} />
            <input id="password" type="password" placeholder="Password"></input>
          </div>
        </div>

        <div className={auth.submitContainer}>
          <div
            className={
              action === "Login"
                ? [auth.submit, auth.gray].join(" ")
                : auth.submit
            }
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={
              action === "Sign Up"
                ? [auth.submit, auth.gray].join(" ")
                : auth.submit
            }
            onClick={() => {
              setAction("Login");
              clickLogin();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
}