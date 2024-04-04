import common from "@/resources/common.module.css";

const Input = ({ name, type, props}) => {
    return (
        <>
            <div className={common.inptWrap}>
                <label>{name}</label>
                <input
                    type={type}
                    {...props}
                    className={common.inpt}
                />
            </div>
        </>
    )
}

export default Input;