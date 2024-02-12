import React from 'react';
//Componenti
import TodoList from './TodoList';
import TodoCreator from './TodoCreator';

export default function ListView({ todos, onTodoUpdate, onTodoDelete, onTodoCreate }) {

    const notCompleted = todos.filter((t) => !t.done);
    const completed = todos.filter((t) => t.done);

    return (
        <>
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
