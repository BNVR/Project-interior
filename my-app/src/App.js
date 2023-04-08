import './App.css';
// import jsfile from './components/javascript'
import Home from './components/Home';
import About from './components/About';
import Services from './components/services';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
// import { cgMenu, cgCloseR } from "react-icons/cg";



function App() {
  const Theme = {
    colors:{
      heading: "#189ab4"
    },
    media: {mobile: "768px", tab:"998px"}
  }
  
  return (
    <>
    <ThemeProvider theme = {Theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home titler='error loading img'
         heading ="Contact-Us" />}   />
        <Route path='/About' element={<About titler='error loading img' />} />
        <Route path='/services' element={<Services titler='error loading img' />} />
        <Route path='/Contact' element={<Contact heading ="Contact-Us" titler='error loading img' />} />
      </Routes>
      </BrowserRouter>
    
      </ThemeProvider>
    </>
  );
}
export default App;
