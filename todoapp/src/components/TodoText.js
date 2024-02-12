import React, { useState } from 'react';

export default function TodoText({ done, text, onChange }) {

    const [editableText, setEditableText] = useState(text);
    const textClasses = `mx-1 my-0 ps-3 flex-grow-1 border-0 ${done ? "text-decoration-line-through text-black-50" : ""}`;

    return (
        <input
            className={textClasses}
            type='text'
            value={editableText}
            onChange={(event) => setEditableText(event.target.value)}
            onBlur={() => onChange(editableText)}
        />
    )
}
