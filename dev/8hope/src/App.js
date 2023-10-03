import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import myButton from './components/myButton';



// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


function App() {
  return (
    <section>
      <section>
        <h1>
          Hello World One!
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org">Reactjs.org</a>
        </h1>
        <myButton />
      </section>
    </section>
  );
}

export default App;
