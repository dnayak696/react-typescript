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
        <form className='input' onSubmit={(e) =>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
             <input type="input"
              ref={inputRef}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
             placeholder='Enter a task' className=''/>
             <button> Go </button>
        </form>
    )
}


export default InputField;
