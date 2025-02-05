import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const[text, setText] = useState('');
  const[name, setName] = useState('love');

// variation 1 -> every render
  // useEffect( ()=> {
  //   console.log("UI rendering done");
  // });

  //variation 2 -> first render 
  // useEffect( () => {
  //   console.log("UI rendering is done")
  // }, []);

  //variation 3 -> first render + whenever dependency changes
  // useEffect( () => {
  //   console.log("UI rendering is done here so, babye");
  // }, [name]);

  //variation 4 -> to handle unamounting of a component
  useEffect( () => {
    //add event listener

    console.log("Listener added");

     return () => {
      console.log("Listener removed");
     }
  }, [text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
    return (
      <div className='App'>
        <input type="text" onChange={changeHandler}></input>
      </div>
  );
}

export default App;
