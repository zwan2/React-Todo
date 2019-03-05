import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      { id:0, text: '리액트 소개',  checked: false},
      { id:1, text: '리액트 소개',  checked: false},
      { id:2, text: '리액트 소개',  checked: false}
      
    ]
  }

  //change 이벤트 핸들러
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  //Create 이벤트 핸들러
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      }),
      //인풋 초기화
      input: ''
    });
  }

  handleKEyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  //체크
  handleToggle = (id) => {
    const {todos} = this.state;

    //id(parameter)로 몇번째인지 index 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    
    const nextTodos = [...todos];

    //체크만 반전
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });

  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle}/>
      </TodoListTemplate>
    );
  }
}

export default App;
