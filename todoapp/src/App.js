import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
//Componenti
import Layout, { LeftCol, RightCol } from './components/Layout';
import User from './components/User';
import ListNames from './components/ListNames';
import NoListView from './components/NoListView';
import ListView from './components/ListView';
import NewListButton from './components/NewListButton';
import ErrorModal from './components/ErrorModal';
//Utils
import { postData, patchData, getData, deleteData } from './utils';

/**** INZIO DATA MOCKUP
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
FINE DATA MOCKUP ***/

export default function App() {

  /******* INIZIO FUNZIONI SENZA API
     
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
  
  const handleDeleteTodo = (id) => {
    const todoIdx = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIdx];
    const tmpTodos = [...todos];
    tmpTodos.splice(todoIdx, 1);
    setTodos(tmpTodos);
    addToListCount(listIdx, todo.done ? 0 : -1);
  }
  
  const handleCreateList = () => {
    const newList = { id: uuid(), name: "Nuovo elenco", undone_count: 0 };
    setAllLists([...allLists, newList]);
    setListIdx(allLists.length);
  }
  
  const handleDeleteList = (id) => {
    const listIdx = allLists.findIndex((l) => l.id === id);
    const tmpLists = [...allLists];
    tmpLists.splice(listIdx, 1);
    setAllLists(tmpLists);
    setListIdx(-1);
  }
  
  const handleUpdateListName = (id, name) => {
    const listIdx = allLists.findIndex((l) => l.id === id);
    const tmpLists = [...allLists];
    tmpLists[listIdx].name = name;
    setAllLists(tmpLists);
  }
  
  FINE FUNZIONI SENZA API ******/

  const [user, setUser] = useState({});
  const [lists, setLists] = useState([]);
  const [listIdx, setListIdx] = useState(-1);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  //Carica i dati una volta che l'applicazione viene caricata
  useEffect(() => {
    getData("/api/user").then((retUser) => setUser(retUser));
    getData("/api/lists").then((retLists) => setLists(retLists));
  }, []);

  //Funzione per creare una nuova lista
  const handleCreateList = () => {
    postData("/api/lists", { name: "Nuovo elenco" })
      .then((newList) => {
        setLists([...lists, newList]);
        setListIdx(lists.length);
        setTodos([]);
      })
      .catch(() => setError(`Errore durante la creazione della nuova lista`));
  };

  //Funzione per selezionare una lista dall'elenco delle liste
  const selectedListByIndex = (idx) => {
    setListIdx(idx);
    const listId = lists[idx].id;
    getData(`/api/todos?listId=${listId}`)
      .then((resTodos) => {
        setTodos(resTodos);
      });
  };

  //Funzione per modificare il nome di una lista
  const handleUpdateListName = (id, name) => {
    patchData(`/api/lists/${id}`, { name })
      .then((patchedList) => {
        const listIdx = lists.findIndex((l) => l.id === id);
        const tmpLists = [...lists];
        tmpLists[listIdx] = patchedList;
        setLists(tmpLists);
      });
  };

  //Funzione per cancellare una lista
  const handleDeleteList = (id) => {
    deleteData(`/api/lists/${id}`)
      .then((deletedList) => {
        const listIdx = lists.findIndex((l) => l.id === id);
        const tmpLists = [...lists];
        tmpLists.splice(listIdx, 1);
        setLists(tmpLists);
        setListIdx(-1);
      });
  };

  //Funzione per creare una nuova ToDo
  const handleCreateTodo = (text) => {
    const listId = lists[listIdx].id;
    postData(`/api/todos`, { listId, text, done: false })
      .then((newTodo) => {
        setTodos([newTodo, ...todos]);
        addToListCount(listIdx, 1);
      })
      .catch(() => setError(`Errore durante la creazione dell'attività`));
  };

  //Funzione (richiamata in altre funzioni) per aggiornare il numero di ToDo da completare
  const addToListCount = (listIdx, num) => {
    const tmpLists = [...lists];
    tmpLists[listIdx] = { ...tmpLists[listIdx] };
    tmpLists[listIdx].undone_count += num;
    setLists(tmpLists);
  }

  //Funzione per modificare lo stato di una ToDo
  const handleUpdateTodo = (id, data) => {
    const todoIdx = todos.findIndex((t) => t.id === id);
    const preTodo = todos[todoIdx];
    patchData(`/api/todos/${id}`, data).then((patchedTodo) => {
      const tmpTodos = [...todos];
      tmpTodos[todoIdx] = patchedTodo;
      setTodos(tmpTodos.filter((t) => t.listId === patchedTodo.listId));
      const isTodoStatusChanged = preTodo.done !== patchedTodo.done;
      if (isTodoStatusChanged) {
        const listIdx = lists.findIndex((l) => l.id === patchedTodo.listId);
        addToListCount(listIdx, preTodo.done ? 1 : -1);
      }
    });
  };

  //Funzione per cancellare una ToDo
  const handleDeleteTodo = (id) => {
    deleteData(`/api/todos/${id}`).then((deletedTodo) => {
      const todoIdx = todos.findIndex((t) => t.id === id);
      const todo = todos[todoIdx];
      const tmpTodos = [...todos];
      tmpTodos.splice(todoIdx, 1);
      setTodos(tmpTodos);
      addToListCount(listIdx, todo.done ? 0 : -1);
    });
  };

  return (
    <>
      <ReactModal isOpen={Boolean(error)}>
        <ErrorModal
          message={error}
          onConfirm={() => setError(false)} />
      </ReactModal>
      <Layout >
        <LeftCol>
          <User
            name={user.name}
            image={user.image} >
            <NewListButton
              onCreateList={handleCreateList} />
          </User>
          <hr />
          <ListNames
            lists={lists}
            selectedListIdx={listIdx}
            onListClick={selectedListByIndex} />
        </LeftCol>
        <RightCol>
          {listIdx === -1 ? (
            <NoListView />
          ) : (
            <ListView
              list={lists[listIdx]}
              todos={todos}
              onTodoCreate={handleCreateTodo}
              onTodoDelete={handleDeleteTodo}
              onTodoUpdate={handleUpdateTodo}
              onListDelete={handleDeleteList}
              onListNameUpdate={handleUpdateListName}
            />
          )}
        </RightCol>
      </Layout>
    </>
  )
}
