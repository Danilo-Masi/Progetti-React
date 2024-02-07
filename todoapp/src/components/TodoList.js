import React from 'react';
//Components
import TodoItem from './TodoItem';

//Archivio mock 
const todos = [
    { id: 1, done: false, text: "Prima attività" },
    { id: 2, done: true, text: "Seconda attività" },
    { id: 3, done: false, text: "Terza attività" },
];

export default function TodoList() {
    //Costante esterna che fa la map sui dati dell'archivio mock
    const todoItems = todos.map((t) => (
        <TodoItem key={t.id} done={t.done} text={t.text} />
    ));
    return (
        <ul className='list-group pb-3'>
            {todoItems}
        </ul>
    )
}
