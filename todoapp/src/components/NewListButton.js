import React from 'react';
//Bootstrap
import { ReactComponent as PlusIcon } from "bootstrap-icons/icons/plus.svg";

export default function NewListButton({ onCreateList }) {
    return (
        <button
            type='button'
            className='btn btn-sm btn-outline-secondary ms-auto'
            onClick={onCreateList}
        >
            <small
                className='d-flex align-item-center'
            >
                
                <PlusIcon />
            </small>
        </button>
    )
}
