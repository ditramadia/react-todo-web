import React, { useState } from "react";
import List from "./List";

export default function Body() {
    const [list, setList] = useState(["Makan", "Mandi", "Sikat gigi"]);
    const [input, setInput] = useState("");
 
    function handleChange(e) {
        const { value } = e.target;
        setInput(value);
    }

    function handleSubmit() {
        setList((prevList) => {
            return [...prevList, input];
        });
        setInput("");
    }

    return(
        <>
            <div className="form">
                <input 
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {
                        list.map((todo, idx) => <List id={idx} name={todo} />)
                    }
                </ul>
            </div>
        </>
    );
} 