import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import 'materialize-css/dist/css/materialize.min.css';
document.body.classList.add('hero');
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
 
  );
}
export default App;
