import common from "@/resources/common.module.css";

export default function ordDtl() {
    return (
        <>
            <div>
                <div className={common.popupContainer}>
                    <div className={common.popupContent} style={{ width: '80%'}}>
                        <div className={common.popupTitle}>
                            <h3>주문 상세</h3>
                            <button className={common.close}>×</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}