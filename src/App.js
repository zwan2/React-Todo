import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';


class App extends Component {
  id = 4;
  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

  state = {
    color: '#343a40',
    input: '',
    todos: [
      { id:0, text: 'Component 직접 구성하기',  checked: true},
      { id:1, text: 'props 전달하기',  checked: true},
      { id:2, text: 'status 상태관리하기',  checked: true},
      { id:3, text: 'redux 적용하기',  checked: false}
      
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

  handleKeyPress = (e) => {
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
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleColorChange = (id) => {
    const changedColor = this.colors[id];
    this.setState({
      color: changedColor
    });
    console.log('a');
    console.log(this.state.color);
    
  }

  render() {
    const { color, input, todos } = this.state;
    const {colors} = this;
    
    
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;

    return (
      <TodoListTemplate 
        palette= {(
          <Palette
            colors={colors}
            onToggle={handleColorChange}
          />
        )}  
        form={(
          <Form
            color={color} 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
      )}>
        <TodoItemList
          color={color} 
          todos={todos} 
          onToggle={handleToggle} 
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
