import React, { useState } from 'react';
//UUID
import { v4 as uuid } from "uuid";
//Components
import Layout, { LeftCol, RightCol } from './components/Layout';
import User from './components/User';
import ListNames from './components/ListNames';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreator';
import NoListView from './components/NoListView';

const user = {
  id: 1,
  name: "Danilo",
  image: "https://github.com/lifeisfoo.png",
};

const initialLists = [
  { id: 1, name: "Importante", undone_count: 0 },
  { id: 2, name: "Film da vedere", undone_count: 2 },
  { id: 3, name: "Libri da leggere", undone_count: 0 },
];

const initialTodos = [
  { listId: 2, id: 1, done: false, text: "Prima attività" },
  { listId: 2, id: 2, done: true, text: "Seconda attività" },
  { listId: 2, id: 3, done: false, text: "Terza attività" },
]

export default function App() {

  const [allLists, setAllLists] = useState(initialLists);
  const [allTodos, setAllTodos] = useState(initialTodos);
  const [listIdx, setListIdx] = useState(-1);
  const [todos, setTodos] = useState([]);

  const selectedListByIndex = (idx) => {
    setListIdx(idx);
    setTodos(allTodos.filter((t) => t.listId === allLists[idx].id));
  }

  const handleCreateTodo = (text) => {
    const newTodo = {
      listId: allLists[listIdx].id,
      id: uuid(),
      done: false,
      text: text,
    }
    setAllTodos([...allTodos, newTodo]);
    setTodos([...todos, newTodo]);
    addToListCount(listIdx, 1);
  }

  const handleUpdateTodo = (id, data) => {
    //Prendiamo l'indice dell'attività tra tutte le attività
    const todoIdx = allTodos.findIndex((t) => t.id === id);
    //Prendiamo l'attività che ha quell'indice
    const preTodo = allTodos[todoIdx];
    //Creiamo un nuovo oggetto
    const updateTodo = {
      ...preTodo,
      ...data,
    };
    //Viene creata una copia dell'array "allTodos"
    const tmpTodos = [...allTodos];
    //Viene sostiuita l'attività vecchia con l'attività aggiornata all'interno
    //dell'array temporaneo "tmpTodos"
    tmpTodos[todoIdx] = updateTodo;
    //Viene aggiornato lo stato con il nuovo array temporaneo
    setAllTodos(tmpTodos);
    //Viene aggiornato lo stato con un array filtrato contente solo le attività che
    //appartengono alla stessa lista dell'attività aggiornata
    setTodos(tmpTodos.filter((t) => t.listId === updateTodo.listId));
    //Viene verificato se lo stato dell'attività è cambiato 
    const isTodoStatusChanged = preTodo.done !== updateTodo.done;
    if (isTodoStatusChanged) {
      addToListCount(listIdx, preTodo.done ? 1 : -1);
    }
  }

  const addToListCount = (listIdx, num) => {
    const tmpLists = [...allLists];
    tmpLists[listIdx] = { ...tmpLists[listIdx] };
    tmpLists[listIdx].undone_count += num;
    setAllLists(tmpLists);
  }

  return (
    <Layout >
      <LeftCol>
        <User name={user.name} image={user.image} />
        <hr />
        <ListNames lists={allLists} selectedListIdx={listIdx} onListClick={selectedListByIndex} />
      </LeftCol>
      <RightCol>
        {listIdx === -1 ? (
          <NoListView />
        ) : (
          <>
            <TodoList todos={todos} onTodoUpdate={handleUpdateTodo} />
            <TodoCreator onCreate={handleCreateTodo} />
          </>
        )}
      </RightCol>
    </Layout>
  )
}
