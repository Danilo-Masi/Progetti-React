import React from 'react';
//Bootstrap
import {ReactComponent as TrashIcon} from "bootstrap-icons/icons/trash.svg";

const todoClasses = "d-flex align-items-center list-group-item my-1 border rounded-1";
const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0 opacity-25 border-0";

export default function TodoItem({ done, text }) {
    const textClasses = `mx-3 my-1 ps-3 flex-grow-1 
    ${done ? "text-decoration-line-through text-black-50" : ""}`;
    return (
        <li className={todoClasses}>
            <input
                className='form-check-input mx-1 my-0'
                type='checkbox'
                checked={done}
                readOnly={true} />
            <p className={textClasses}>{text}</p>
            <button className={btnClasses}>
                <TrashIcon />
            </button>
        </li>
    )
}
