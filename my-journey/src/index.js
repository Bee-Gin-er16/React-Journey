import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import Container from './Container.js';
import Header from './Header.js';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

/* Depreciated 
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
*/
const x = 5;
let text = "Goodbye";
if (x < 10){
    text = "Hello Hans";
}

/*
function Car() {
    return <h2>I am a Car!</h2>;
}
  
function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
}
*/

//TODO React Props/Events
const root = ReactDOM.createRoot(document.getElementById('root'));
const myelement = <h1>{text}</h1>;
root.render(myelement);
root.render(<Car />);
root.render(<Header favcol="blue"/>);
root.render(<Container />);
