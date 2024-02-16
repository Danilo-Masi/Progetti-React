import React from 'react';
//Componenti
import TodoItem from './TodoItem';

export default function TodoList({ todos, onTodoUpdate, onTodoDelete }) {
    //Fa la mappa sulla lista delle attività in modo tala da rendere il codice piu semplice da leggere
    const todoItems = todos.map((t) => (
        <TodoItem
            key={t.id}
            id={t.id}
            done={t.done}
            text={t.text}
            updateTodo={onTodoUpdate}
            deleteTodo={onTodoDelete}
        />
    ));
    return (
        <ul className='list-group pb-3'>
            {todoItems}
        </ul>
    )
}
