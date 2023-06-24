import React,{useState, useRef, useEffect} from "react";
import { Todo } from  '../modals/todo';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone}from 'react-icons/md';



type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) =>{

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);


    const handleDone = (id: any) => {
       console.log(id)
    setTodos(todos.map(todo =>{
         return todo.id === id ? {...todo, isDone: !todo.isDone}: todo;
    }))
    }


    const handleDelete = (id: any) =>{
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    const handleEdit = (e: React.FormEvent, id: number) =>{
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id )? {...todo, todo: editTodo}: todo)
        )
        setEdit(false);

    }


    useEffect(() =>{
        inputRef.current?.focus();
    },[edit])


     return(
        <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
           <div  style={{ display: "flex", alignItems:"center", 
           justifyContent: "space-between",
        backgroundColor: "yellow",
        padding: "10px",
        borderRadius: "5px",
        width: "500px",
        margin: "10px",
        }}> 

      {
        edit ? (
            <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
        ):(
        
              todo.isDone ? (
                    <s>{todo.todo}</s>
                ):( <span>
                    {todo.todo}
                  </span>
              )    
        )
      }

       
            
            <div style={{}}>
                <span className="icon" onClick={ () =>{
                    if(!edit && !todo.isDone){
                    setEdit(!edit)
                    }
                }}>
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
        </form>
    )
}

export default SingleTodo;
