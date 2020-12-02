//import {BrowserRouter, Route, Link} from 'react-router-dom'
import { useState } from "react";


const arrayNombres = [
    'Wolfgang Amadeus Mozart',
    'Ludwig van Beethoven',
    'Johann Sebastian Bach'
];



function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [text, setText] = useState(inputValue);
  const [list, setList] = useState(arrayNombres);
  const [name, setName] = useState(arrayNombres)
 


 // Capturar el valor del input a través del evento onChange

  const handleInput = (e) => { 
    setInputValue(e.target.value)
  }
  const showText = () => {
    setText(inputValue)
  }

  const nombres = arrayNombres.map(nombre => {
    return <li key={ nombre }>{nombre}</li>
  })



  const showList = () => setList(nombres);

    const handleInput2 = (e) => { 
    setInputValue2(e.target.value)
  }

    const mostrarNombres = name.map(name => {
    return <li key={name}>{name}</li>
  })

  const addName = () => {
    setName((prevArray) => {return[...prevArray, handleInput2]})
   }

  return (
    <>
     <input type="text"
      value={inputValue}
      onChange={handleInput} />
      
      <button onClick={showText}>Mostrar texto</button>
      <p>{text}</p>

       <hr />

      <button onClick={showList}>Mostrar Lista</button>
      <ul>{list}</ul>

      <hr /> 

      <input type="text"
      value={inputValue2}
      onChange={handleInput2} />

      <button onClick={addName}>Añadir nombre</button>
      <ul>{mostrarNombres}</ul>
        
       </>
  );
}

export default App;

