import React from 'react';

export default function InputText({ value, onChange }) {

    return (
        <input
            type='text'
            placeholder='cerca...'
            className='w-full p-2 ml-5'
            value={value}
            onChange={onChange} />
    );
}
