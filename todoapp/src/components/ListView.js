import React, { useState } from 'react';
import ReactModal from 'react-modal';
//Componenti
import TodoList from './TodoList';
import TodoCreator from './TodoCreator';
import DeleteButton from './DeleteButton';
import ListDeleteModal from './ListDeleteModal';
import EditableText from './EditableText';

export default function ListView({ list, todos, onTodoUpdate, onTodoDelete, onTodoCreate, onListDelete, onListNameUpdate }) {

    const notCompleted = todos.filter((t) => !t.done);
    const completed = todos.filter((t) => t.done);
    const [delModal, setDelModal] = useState(false);

    return (
        <>
            <div className='d-flex align-item-center position-relative'>
                <EditableText
                    className='h2 flex-grow-1 border-0 mx-2 py-1'
                    initialText={list.name}
                    onEditEnd={(name) => onListNameUpdate(list.id, name)}
                    key={list.id}
                />
                <DeleteButton
                    onClick={() => setDelModal(true)}
                />
            </div>
            <ReactModal isOpen={delModal}>
                <ListDeleteModal
                    message={`Vuoi eliminare l'elenco "${list.name}" con ${todos.length} attività?`}
                    onDelete={() => onListDelete(list.id)}
                    onCancel={() => setDelModal(false)}
                />
            </ReactModal>
            <TodoList
                todos={notCompleted}
                onTodoUpdate={onTodoUpdate}
                onTodoDelete={onTodoDelete}
            />
            {completed.length > 0 && (
                <>
                    <h6>Completate</h6>
                    <TodoList
                        todos={completed}
                        onTodoUpdate={onTodoUpdate}
                        onTodoDelete={onTodoDelete}
                    />
                </>
            )}
            <TodoCreator
                onCreate={onTodoCreate}
            />
        </>
    )
}
