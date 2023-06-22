import React from "react";
import { Todo } from  '../modals/todo';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone}from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) =>{

    const handleDone = (id: any) => {
       console.log(id)
    setTodos(todos.map(todo =>{
         return todo.id === id ? {...todo, isDone: !todo.isDone}: todo;
    }))
    }


    const handleDelete = (id: any) =>{
        setTodos(todos.filter((todo) => todo.id !== id));
    }



     return(
        <div className="todos_single" >
           <div  style={{ display: "flex", alignItems:"center", 
           justifyContent: "space-between",
        backgroundColor: "yellow",
        padding: "10px",
        borderRadius: "5px",
        width: "500px",
        margin: "10px",
        }}> 

        {
            todo.isDone ? (
                <s>{todo.todo}</s>
            ):( <span>
                {todo.todo}
              </span>
          )}
            
            <div style={{}}>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={()=>handleDone(todo.id)}>
                     < MdDone/>
                </span>
                <span className="icon" onClick={() =>handleDelete(todo.id)  }>
                      <AiFillDelete/>
                </span>
            </div>
            </div>
        </div>
    )
}

export default SingleTodo;
