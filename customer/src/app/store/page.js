"use client"

import common from "@/resources/common.module.css";
import Input from "@/app/component/Input";
import { useEffect, useState } from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";

export default function menu() {
    const [data, setData] = useState();
    const router = useRouter();

    const getdata = async () => {
        try {
            const response = await axios.get("http://localhost:3001/users/stores/all/10");
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            alert('조회 에러');
        }
    }

    const isOpen = (e) => {
        const openSplit = e.OPEN_TIME.split(":");
        const closeSplit = e.CLOSE_TIME.split(":");
        const nowRaw = new Date(Date.now()).toLocaleTimeString();
        const nowSplit = nowRaw.substring(3).split(":");
        nowSplit[0] = (String) ((Number) (nowSplit[0]) + (nowRaw.split(" ")[0] == "오후" ? 12 : 0));
        const open = openSplit[0]*3600+openSplit[1]*60+openSplit[2];
        const close = closeSplit[0]*3600+closeSplit[1]*60+closeSplit[2];
        const now = nowSplit[0]*3600+nowSplit[1]*60+nowSplit[2];
        if (close - now > 0 && now - open > 0) {
            return "영업중"
        }else {
            return "영업끝"
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div>
                <div className={common.pageTitleWrap}>
                    <h2>매장 찾기</h2>
                </div>

                <div className={common.srchListWrap}>
                    <ul className={common.srchList}>
                        <li className={[common.srch, common.full].join(' ')}>
                            <div className={common.inptWrap}>
                                <label>매장 이름</label>
                                <input
                                    type={"type"}
                                    className={common.inpt}
                                />
                            </div>
                            {/* <Input name={"매장 이름"} type={"text"}/> */}
                        </li>
                    </ul>
                    <button className={common.inq}>검색</button>
                </div>
                {/* 리스트 */}
                <ul className={common.menuList}>
                    {data?(data.map((e,i) => 
                        <li
                            key={i}
                            className={common.menu}
                            onClick={() => {
                                router.push(`/store/menu/?shop_id=${e.SHOP_ID}`
                                )
                            }}
                        >
                            <div className={common.menuImg}>
                                {/*<Image src={} alt={}/>*/}
                                <span>매장 사진</span>
                            </div>
                            <p className={common.menuNm}>{e.SHOP_NM}</p>
                            <p className={common.menuDesc}>{e.SHOP_DESC}</p>
                            <div className={common.menuYn}>
                                <p>{e.CTGRY}</p>
                                <p>{isOpen(e)}</p>
                            </div>
                        </li>
                    )):""}
                </ul>
            </div>
        </>
    )
}