import React from 'react';
import { Todo } from '../modals/todo';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({todos, setTodos})=> {
    return(
        <div className='todos'>
            <div style={{display: "flex", justifyContent:'space-evenly', width: '90%', flexWrap: "wrap" , padding: "20px"}}>
            {todos.map((todo, index) =>{
               return(

                <SingleTodo
                 todo={todo} 
                 todos={todos}
                 setTodos={setTodos}
                />
                 //   <li key={index}>{todo.todo}</li>
            )
              })}
            </div>
          
        </div>
    )
}


export default TodoList;