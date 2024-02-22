import React, { useState } from 'react';
//Componenti
import { Row } from './Layout';
import InputText from './InputText';

const handleSearch = (digit) => {
  if (digit === '') {
    alert('il campo non puo essere vuoto');
  } else {
    alert(digit);
  }
}

function Button({ children, onClick }) {
  return (
    <button
      className='bg-blue-500 w-10 p-2 mr-5'
      onClick={onClick} >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

export default function SearchBar() {

  const [digit, setDigit] = useState("");

  return (
    <Row height="h-1/6">
      <InputText
        value={digit}
        onChange={(event) => setDigit(event.target.value)} />
      <Button
        onClick={() => handleSearch(digit)} >
        <SearchIcon />
      </Button>
    </Row>
  )
}
