import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ]
  )
  const [title, setTitle] = useState('');

  const addMessage = (title: string) => {
      setMessage([{message: title}, ...message]);

  }

  const callBackButtonHandler = () => {
      addMessage(title);
      setTitle('');
  }

  return (
      <div className="App">
        {/*<div>*/}
        {/*  <input />*/}
        {/*  <button>+</button>*/}
        {/*</div>*/}
        {/*<FullInput messageArr={message} setMessage={setMessage}/>*/}

        <Input title={title} setTitle={setTitle}/>
        <Button name={'+'} callBack={callBackButtonHandler}/>

        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}

export default App;
