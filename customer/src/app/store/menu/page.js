"use client"

import Image from "next/image";
import common from "/src/resources/common.module.css";
import Input from "/src/app/component/Input";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import MenuDtl from "/src/app/store/menu/menuDtl/page";

export default function storeMenu() {
    const [shopData, setShopData] = useState();
    const [productData, setProductData] = useState();
    const [showMenuDtl, setMenuDtl] = useState(-1);
    const shop_id = useSearchParams().get("shop_id");
    const router = useRouter();

const noww = new Date();

    const getShopData = async () => {
        try {
            const response = await axios.get("http://220.78.7.18:3001/users/stores/"+shop_id);
            setShopData(response.data[0]);
        } catch (error) {
            console.log(error);
            alert('조회 에러');
        }
    }
    const getProductData = async () => {
        try {
            const response = await axios.get("http://220.78.7.18:3001/users/products/"+shop_id);
            console.log(response.data)
            setProductData(response.data);
        } catch (error) {
            console.log(error);
            alert('조회 에러');
        }
    }

    const clickMenuDtl = (i) => {
        setMenuDtl(showMenuDtl == -1? i : -1);
    }

    useEffect(() => {
        getShopData();
        getProductData();
    }, []);

    return (
        <>
            <div className={common.shopMenu}>
                <div className={common.pageTitleWrap}>
                    <div>
                        <h2>{shopData ? shopData.SHOP_NM : ""}</h2>
                        <h3>{shopData ? shopData.SHOP_DESC : ""}</h3>
                    </div>
                    <button
                        className={common.pageBtn}
                        onClick={() => router.push("/store")}
                    >돌아가기</button>
                </div>
                <div className={common.storeContent}>
                    <div className={common.storeLayout}>
                        <div className={common.storeImg}>
                            {/*<input type="file"/>*/}
                            <Image src={""} alt={"가게 사진"} />
                        </div>
                        <div className={common.storeInptWrap}>
                            <div className={common.infotime}>
                                <Input
                                    name={"주소"}
                                    type={"text"}
                                    defaultValue={shopData ? shopData.BSC_ADDR : ""}
                                    readOnly
                                />
                                <Input
                                    name={"상세주소"}
                                    type={"text"}
                                    defaultValue={shopData ? shopData.DTL_ADDR : ""}
                                    readOnly
                                />
                            </div>
                            <div className={common.storeInfoBox}>
                                <div className={common.infoWrap}>
                                    <Input
                                        name={"OPEN"}
                                        type={"time"}
                                        defaultValue={shopData ? shopData.OPEN_TIME : ""}
                                        readOnly
                                    />
                                    <Input
                                        name={"CLOSE"}
                                        type={"time"}
                                        defaultValue={shopData ? shopData.CLOSE_TIME : ""}
                                        readOnly
                                    />
                                </div>
                                <div className={common.infoWrap}>
                                    <Input
                                        name={"전화번호"}
                                        type={"number"}
                                        defaultValue={shopData ? shopData.TELNO : ""}
                                        readOnly
                                    />
                                    <Input
                                        name={"카테고리"}
                                        type={"text"}
                                        defaultValue={shopData ? shopData.CTGRY : ""}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={common.storeLayout}>
                        <div className={common.storeInptWrap}>
                        </div>
                    </div>
                </div>

                <ul className={common.menuList}>
                {productData?productData.map((e, i) => (
                    <li
                        key={i}
                        className={common.menu}
                        onClick={() => clickMenuDtl(i)}
                    >
                        <div className={common.menuImg}>
                        {/*<Image src={} alt={}/>*/}
                        <span>메뉴 사진</span>
                        </div>
                        <p className={common.menuNm}>{e.GDS_NM}</p>
                        <p className={common.menuDesc}>{e.GDS_DESC}</p>
                        <div className={common.menuOpt}>
                            {e.OPTION_NUM==="0"?<p>&nbsp;</p>:
                                <>
                                    <p>옵션 개수</p>
                                    <p>{e.OPTION_NUM}</p>
                                </>
                            }
                        </div>
                        <div className={common.menuYn}>
                        <p>메뉴 상태</p>
                        <p>{e.GDS_SOLDOUT_YN==="1"?"품절":"판매중"}</p>
                        </div>
                        <p className={common.menuPrc}>
                        {e.GDS_PRC.toLocaleString("ko-KR")}
                        </p>
                    </li>
                    )):""}
                </ul>
            </div>

            {showMenuDtl > -1 &&
                <MenuDtl
                clickMenuDtl={clickMenuDtl}
                menuDtl={productData[showMenuDtl]}
                shopId={shop_id}
                />
            }
        </>
    )
}