import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import ContactForm from './Components/Contact';
import 'materialize-css/dist/css/materialize.min.css';
document.body.classList.add('hero');
function App() {
  const [currentNavItem, setCurrentNavItem] = useState('About');
  const renderPage = () => {
    switch(currentNavItem){
      case 'About':
        return <About></About>
      case 'Contact':
        return  <ContactForm></ContactForm>
       default:
         return <About></About> 
    }
  };
  return (
    <div>
      <Nav
      currentNavItem={currentNavItem}
      setCurrentNavItem={setCurrentNavItem}>
      </Nav>
      <main>
        {renderPage()}
      </main>
    </div>
 
  );
}
export default App;
