import React, { useState } from "react";

export default function List(props) {
    return (
        <div onClick={() => props.onDelete(props.id)}>
            <li>{props.name}</li>
        </div>
    );
}