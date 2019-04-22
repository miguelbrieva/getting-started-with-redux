const deepFreeze = require('deep-freeze');
const expect = require('expect');

const toggleTodo = todo => {
  // Mutated Version
  // console.log(todo);
  // todo.completed = !todo.completed;
  // console.log(todo);
  // return todo;

  // Most basic Version
  // return {
  //   id: 0,
  //   text: 'Learn Redux',
  //   completed: !todo.completed
  // }

  // Object.assign Version
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // });

  // Spread Operator Solution
  return {
    ...todo,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };
  deepFreeze(todoBefore);
  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.');
