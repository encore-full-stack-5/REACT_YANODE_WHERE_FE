import common from "@/resources/common.module.css";

const Textarea = ({ name, ...props}) => {
    return (
        <>
            <div className={common.inptWrap}>
                <label>{name}</label>
                <textarea
                    {...props}
                    className={common.inpt}
                />
            </div>
        </>
    )
}

export default Textarea;