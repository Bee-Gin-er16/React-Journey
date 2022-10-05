import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; */

/* Depreciated 
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
*/
const x = 5;
let text = "Goodbye";
if (x < 10){
    text = "Hello Hans";
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Header = () => {
  return (
    <>
    <h1 style={{color:"red"}} >Hello Style!</h1>
    <p>Add a little style!.</p>
    </>
  );
}


//TODO React Memo
const root = ReactDOM.createRoot(document.getElementById('root'));
const myelement = <h1>{text}</h1>;
/* root.render(myelement);
root.render(<Car />);
root.render(<Header favcol="blue"/>);
root.render(<Container />); */
root.render(<Header />);


