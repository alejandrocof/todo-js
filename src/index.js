import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

//console.log( todoList.todos );

//todoList.todos.forEach( todo => crearTodoHtml( todo) );
//aquí queda implicita la funcioón de flecha anterior
todoList.todos.forEach( crearTodoHtml );

// //sólo la instancia newTodo es de tipo Todo [{…}, {…}, {…}, {…}, Todo]
// const newTodo = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo( newTodo );
// console.log( 'todos:', todoList.todos );
// //al recuperar los objetos del localStorage se pìerden todos
// //los metodos porque no son instancias de Todo
// todoList.todos[todoList.todos.length-1].imprimirClase();
// todoList.todos[0].imprimirClase(); //error


// const tarea = new Todo('Aprender JavaScript!!');
// //const tarea2 = new Todo('Comprar un unicornio');

// // console.log(tarea);

// todoList.nuevoTodo( tarea );
// //todoList.nuevoTodo( tarea2 );

// //tarea.completado = true;

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC1234');
// sessionStorage.setItem('mi-key','ABC1234');
// setTimeout( ()=>{
//     localStorage.removeItem('mi-key')
// },1500);