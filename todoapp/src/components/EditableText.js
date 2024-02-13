import React, { useState } from 'react';

export default function EditableText({ initialText, onEditEnd, className }) {

    const [editableText, setEditableText] = useState(initialText);

    return (
        <input
            className={className}
            type='text'
            value={editableText}
            onChange={(event) => setEditableText(event.target.value)}
            onBlur={() => {
                if (editableText !== initialText) {
                    onEditEnd(editableText);
                }
            }}
        />
    )
}
