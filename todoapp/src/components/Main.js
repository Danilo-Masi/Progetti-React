import React from 'react';
//Components
import Col from './Col';
import TodoList from './TodoList';

export default function () {
  return (
    <Col size={9}>
      <TodoList />
    </Col>
  )
}
