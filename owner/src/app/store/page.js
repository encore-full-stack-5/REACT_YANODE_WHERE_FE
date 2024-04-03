import common from '@/resources/common.module.css';
import Image from "next/image";

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
                            <div className={common.inptWrap}>
                                <label>업종</label>
                                <input
                                    type="text"
                                    className={common.inpt}
                                />
                            </div>
                            <div className={common.inptWrap}>
                                <label>위치</label>
                                <input
                                    type="text"
                                    className={common.inpt}
                                />
                            </div>
                            <div className={common.inptWrap}>
                                <label>가게 이름</label>
                                <input
                                    type="text"
                                    className={common.inpt}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={common.storeLayout}>
                        <div className={common.storeInptWrap}>
                            <div className={common.inptWrap}>
                                <label>가게 설명</label>
                                <textarea
                                    className={common.inpt}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={common.storeLayout}>
                        <div className={common.storeInptWrap}>
                            <div className={common.setTime}>
                                <div className={common.inptWrap}>
                                    <label>OPEN</label>
                                    <input
                                        type="time"
                                        className={common.inpt}
                                    />
                                </div>
                                <span>~</span>
                                <div className={common.inptWrap}>
                                    <label>CLOSE</label>
                                    <input
                                        type="time"
                                        className={common.inpt}
                                    />
                                </div>
                            </div>
                            <div className={common.inptWrap}>
                                <label>전화번호</label>
                                <input
                                    type="number"
                                    placeholder={'숫자만 입력'}
                                    className={common.inpt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}