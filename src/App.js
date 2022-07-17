import './App.css';
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import Section from './components/Section';
import { useState } from "react";
import Main from "./components/Main";
import Article from './components/Article';
import Footer from './components/Footer';

function App() {

  const [open, setOpen] = useState(false);

 

  const hamburgerOpenHandler = () => {
    setOpen(true)
  }
  const hamburgerCloseHandler = () => {
    setOpen(false)
  }
  return (
    <div className="App">
      {open ? <Hamburger onClose={hamburgerCloseHandler}/> :
    <div>
      <Header onClick={hamburgerOpenHandler} />
      <Main/>
      <Section/>
      <Article/>
      <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
