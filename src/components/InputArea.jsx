import React, { useState } from "react";

export default function InputArea(props) {
    const [input, setInput] = useState("");
 
    function handleChange(e) {
        const { value } = e.target;
        setInput(value);
    }

    return(
        <div className="form">
            <input 
                type="text"
                value={input}
                onChange={handleChange}
            />
            <button onClick={() => {
                props.onSubmit(input);
                setInput("");
                }}>
                <span>Add</span>
            </button>
        </div>
);
}