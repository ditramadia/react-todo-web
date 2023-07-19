import React, { useState } from "react";
import InputArea from "./InputArea";
import List from "./List";

export default function Body() {
    const [list, setList] = useState(["Makan", "Mandi", "Sikat gigi"]);

    function handleSubmit(input) {
        setList((prevList) => {
            return [...prevList, input];
        });
    }

    function handleDelete(id) {
        setList((prev) => prev.filter((item, idx) => idx !== id));
    }

    return(
        <>
            <InputArea onSubmit={handleSubmit}/>
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