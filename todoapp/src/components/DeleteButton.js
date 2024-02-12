import React from 'react';
//Bootstrap
import { ReactComponent as TrashIcon } from "bootstrap-icons/icons/trash.svg";

export default function DeleteButton({ onClick }) {

    const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0 opacity-25 border-0";

    return (
        <button
            className={btnClasses}
            onClick={onClick}>
            <TrashIcon />
        </button>
    )
}
