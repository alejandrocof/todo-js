import { Todo } from '../classes';
import { todoList } from '../index';

//Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) =>{

    const htmlTodo = `
    <li class="${ (todo.completado)?'completed':'' }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado)?'checked':'' } >
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `

    const div = document.createElement( 'div' );
    div.innerHTML = htmlTodo;

    //quita el div, para sólo quedarnos con el <li>
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

//Eventos

txtInput.addEventListener('keyup',(event)=>{
    //console.log(event);
    if ( event.keyCode === 13 && txtInput.value.length > 0 ){

        console.log( txtInput.value );
        const nuevoTodo = new Todo( txtInput.value);
        todoList.nuevoTodo( nuevoTodo );

        console.log(todoList);
        crearTodoHtml( nuevoTodo )
        txtInput.value = '';
    }

});

divTodoList.addEventListener( 'click' , (event) => {
    //console.log('click');
    //console.log( event.target.localName );
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    //console.log( nombreElemento );

    if( nombreElemento.includes('input') ){//click en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ){// borrar el todo
        console.log( "eliminando" ,todoId );

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild(todoElemento);
    
    }
    //console.log( todoElemento );
    //console.log( todoId );
   //console.log( todoList );



});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
    
    for( let i= divTodoList.children.length-1; i>=0; i-- ){

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild( elemento );
        }
        //console.log(elemento);

    }

});

ulFiltros.addEventListener('click', (event) => {
    //console.log(event);
    //console.log(event.target.text);
    const filtro = event.target.text;
    if( !filtro ){ return;}

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    //console.log( event.target );
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;
        }

        //console.log(elemento);

    }


});