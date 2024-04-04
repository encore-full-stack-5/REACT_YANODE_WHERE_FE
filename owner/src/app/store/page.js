import common from '@/resources/common.module.css';
import Image from "next/image";
import Input from "@/app/component/Input";
import Textarea from "@/app/component/Textarea";

export default function store() {
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
                            <Image src={''} alt={'가게 사진'} />
                        </div>
                        <div className={common.storeInptWrap}>
                            <Input name={"업종"} type={"text"} />
                            <div className={common.inptWrap}>
                                <label>위치</label>
                                <input
                                    type="text"
                                    className={common.inpt}
                                    placeholder={"기본 주소"}
                                />
                                <input
                                    type="text"
                                    className={common.inpt}
                                    placeholder={"상세 주소"}
                                />
                            </div>
                            <Input name={"가게 이름"} type={"type"} />
                        </div>
                    </div>
                    <div className={common.storeLayout}>
                        <div className={common.storeInptWrap}>
                            <Textarea name={"가게 설명"} />
                        </div>
                    </div>
                    <div className={common.storeLayout}>
                        <div className={common.storeInptWrap}>
                            <div className={common.setTime}>
                                <Input name={"OPEN"} type={"time"}/>
                                <span>~</span>
                                <Input name={"CLOSE"} type={"time"}/>
                            </div>
                            <div className={common.inptWrap}>
                                <Input name={"전화번호"} type={"number"} placeholder={"숫자만 입력"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}