import React from 'react'
import AddTodo from '../Container/AddTodo'
import VisibleTodoList from '../Container/VisibleTodoList'
import Footer from '../Components/Footer'

function TodoApp(){
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  )
}

export default TodoApp;