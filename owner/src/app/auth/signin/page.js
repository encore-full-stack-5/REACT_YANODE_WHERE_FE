"use client"

import auth from "/src/resources/auth.module.css";
import userIcon from "/public/images/person.png";
import emailIcon from "/public/images/email.png";
import passwordIcon from "/public/images/password.png";
import {useState} from "react";
import Image from 'next/image';

export default function signin() {
    const [action, setAction] = useState("Login");
    return (
        <>
            <div className={auth.container}>
                <div className={auth.header}>
                    <div className={auth.text}>{action}</div>
                    <div className={auth.underline}></div>
                </div>
                <div className={auth.inputs}>
                    {action === "Login" ? (
                        <div/>
                    ) : (
                        <div className={auth.input}>
                            <Image src={userIcon} alt={""}/>
                            <input type="text" placeholder="Name"></input>
                        </div>
                    )}

                    <div className={auth.input}>
                        <Image src={emailIcon} alt={""}/>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div className={auth.input}>
                        <Image src={passwordIcon} alt={""}/>
                        <input type="password" placeholder="Password"></input>
                    </div>
                </div>

                <div className={auth.submitContainer}>
                    <div
                        className={action === "Login" ? [auth.submit, auth.gray].join(' ') : auth.submit}
                        onClick={() => {
                            setAction("Sign Up");
                        }}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === "Sign Up" ? [auth.submit, auth.gray].join(' ') : auth.submit}
                        onClick={() => {
                            setAction("Login");
                        }}
                    >
                        Login
                    </div>
                </div>
            </div>
        </>
    )
}