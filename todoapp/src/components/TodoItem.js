import React from 'react';
import StatusCheckbox from './StatusCheckbox';
import TodoText from './TodoText';
import DeleteButton from './DeleteButton';

const todoClasses = "d-flex align-items-center list-group-item my-1 border rounded-1";

export default function TodoItem({ id, done, text, updateTodo }) {
    return (
        <li className={todoClasses}>
            <StatusCheckbox
                done={done}
                onChange={() => updateTodo(id, { done: !done })}
            />
            <TodoText done={done} text={text} />
            <DeleteButton />
        </li>
    )
}
