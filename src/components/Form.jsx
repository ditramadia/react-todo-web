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

    function handleDelete(id) {
        setList((prev) => prev.filter((item, idx) => idx !== id));
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
                        list.map((todo, idx) => <List key={idx} id={idx} name={todo} onDelete={handleDelete} />)
                    }
                </ul>
            </div>
        </>
    );
} 