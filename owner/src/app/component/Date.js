import common from "@/resources/common.module.css";

const Date = ({ name, props}) => {
    return (
        <>
            <div className={common.inptWrap}>
                <label>{name}</label>
                <div className={common.srchDate}>
                    <input
                        type="date"
                        className={common.inpt}
                        {...props}
                    />
                    <span>~</span>
                    <input
                        type="date"
                        className={common.inpt}
                        {...props}
                    />
                </div>
            </div>
        </>
    )
}

export default Date;