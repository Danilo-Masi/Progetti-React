import React from 'react';

export default function InlineDeleteModal({ onDelete, onCancel }) {

    const classes = 'position-absolute top-0 start-0 bottom-0 end-0 bg-secondary d-flex align-items-center justify-content-end';

    return (
        <div className={classes}>
            <button
                className='btn btn-sm btn-danger mx-1 py-0'
                onClick={onDelete}>
                Elimina
            </button>
            <button
                className='btn btn-sm btn-light mx-1 py-0'
                onClick={onCancel}>
                Annulla
            </button>
        </div>
    )
}
