import React from 'react';
import ReactDOM from 'react-dom/client';
// no 1

// const JSX = <h1>Hello JSX!</h1>

// no 2

// const JSX = <div>
//   <h1></h1>
//   <p></p>
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </div>

// no 3

// const JSX = (
//   <div>
//     <h1>This is a block of JSX</h1>
//     <p>Here's a subtitle</p>
//     {/* Hello */}
//   </div>
// );

// no 4
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))


