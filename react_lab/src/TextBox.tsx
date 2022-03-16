import React, {Dispatch, SetStateAction} from "react";

function TextBox(props: { label: string; change: Dispatch<SetStateAction<string>> }) {
    const handleChange = (event: {target: HTMLInputElement}) => {
        props.change(event.target.value);
    }
    return (
        <div>
            <label>{props.label}: </label>
            <input type={"text"} onChange={handleChange}/>
        </div>
    );
}

export default TextBox;