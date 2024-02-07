import React from 'react';
//Components
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const user = {
  id: 1, 
  name: "Danilo",
  image: "https://github.com/lifeisfoo.png",
}

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
          <Sidebar user={user} />
          <Main />
      </div>
    </div>
  )
}
