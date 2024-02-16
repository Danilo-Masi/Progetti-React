import React, { useState } from 'react';
//Componenti
import StatusCheckbox from './StatusCheckbox';
import DeleteButton from './DeleteButton';
import InlineDeleteModal from './InlineDeleteModal';
import EditableText from './EditableText';

const todoClasses = "d-flex align-items-center list-group-item my-1 border rounded-1";
//Funzione per impostare una classe di stile personalizzata
const getTextClasses = (done) => `mx-1 my-0 ps-3 flex-grow-1 border-0 ${done ? "text-decoration-line-through text-black-50" : ""}`;

export default function TodoItem({ id, done, text, updateTodo, deleteTodo }) {

    const [delModal, setDelModal] = useState(false);

    return (
        <li className={todoClasses}>
            <StatusCheckbox
                done={done}
                onChange={() => updateTodo(id, { done: !done })}
            />
            <EditableText
                className={getTextClasses(done)}
                initialText={text}
                onEditEnd={(newText) => updateTodo(id, { text: newText })}
            />
            <DeleteButton
                onClick={() => setDelModal(true)} />
            {delModal && (
                <InlineDeleteModal
                    onDelete={() => deleteTodo(id)}
                    onCancel={() => setDelModal(false)}
                />
            )}
        </li>
    )
}
