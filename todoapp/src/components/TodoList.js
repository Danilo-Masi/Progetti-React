import React from 'react';
//Components
import TodoItem from './TodoItem';

export default function TodoList({ todos, onTodoUpdate }) {
    //Costante esterna che fa la map sui dati dell'archivio mock
    const todoItems = todos.map((t) => (
        <TodoItem
            key={t.id}
            id={t.id}
            done={t.done}
            text={t.text}
            updateTodo={onTodoUpdate}
        />
    ));
    return (
        <ul className='list-group pb-3'>
            {todoItems}
        </ul>
    )
}
