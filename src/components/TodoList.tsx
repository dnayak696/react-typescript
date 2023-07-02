import React from 'react';
import { Todo } from '../modals/todo';
import SingleTodo from './SingleTodo';
import './styles/todoList.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({todos, setTodos})=> {
    return(
       <div className='container' >
          <div className='todos'>
            <span className='todos_heading'>Active Tasks</span> 
            {
            todos.map((todo)=>(
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                />
            ))
            }
          </div>

          <div className="todo_remove">
          <span className='todos_heading'>Completed Tasks</span> 
            {
            todos.map((todo)=>(
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                />
            ))
            }
          </div>

       </div>
    )
}


export default TodoList;