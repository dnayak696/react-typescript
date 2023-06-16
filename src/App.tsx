
import './App.css';

let name : string;

let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// aliase are two type "type" and "interface"

// In type 

type X = {
  a: string;
  b: number;
}


type Y = X & {
  c: string;
  d: number;
}

// In Interface can be extended using the extends like class

interface Guy extends Person {
   profession: string;
}

type Person ={ 
  name: string;
  age: number;
}

let person : Person = {
  name: "Piyush",
  age: 22
}

//Array  of objects

let lotsOfPeople: Person[];


// function
// "unknown" is defined instead of any

/**
 * never is used instead of "unknown"
 */



let printName : (name: string) => number;


function printPerson(name: number){
  console.log(name)
}

const  App: React.FC = () => {
  return (
    <div className="App">
       <h1> Hello world</h1>
    </div>
  );
}

export default App;
