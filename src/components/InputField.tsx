import React, {useRef} from 'react';
import { Todo } from '../modals/todo';


interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    
}

const InputField : React.FC<Props> = ({todo, setTodo, handleAdd}) =>{

    const inputRef = useRef<HTMLInputElement>(null);
    
    return(
        <form 
        
        style={{ display: "flex", justifyContent: "space-around",  alignItems: "center", gap: "10px"
     }}
        
        className='input'
        
        onSubmit={(e) =>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
             <input 
              type="input"
              ref={inputRef}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder='Enter a task' 
              className='' 
            style={{width: "300px", height:"30px", borderRadius: "5px", }}
              />

             <button 
            style={{borderRadius: "50%", width:"40px", height:"40px",}}
             > Go </button>

        </form>
    )
}


export default InputField;
