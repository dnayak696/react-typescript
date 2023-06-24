export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
  }

  // type Actions = 
  //  |{type: "Add", payload: string}
  //  | {type: "Delete", payload: number}
  //  | {type: "Done", payload: number}

  // const todoReducer = (state: Todo[], action :Actions) => {
  //   switch (action.type){
  //     case "Add":
  //       return [
  //         ...state,
  //         {id: Date.now(), todo: action.payload, isDone: false},
  //       ]

  //     case "Delete":
  //       return state.filter((todo) => todo.id !== action.payload);

  //     case "Done": 
  //        return  state.map((todo) => (todo.id === action.payload )? {...todo, isDone : !todo.isDone}: todo)
  // }

  // import { useReducer } from "react";

  // const ReducerExample = () =>{
  //   const [state, dispath] = useReducer(todoReducer, []);
  // }