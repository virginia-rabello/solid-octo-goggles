import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import ContactForm from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
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
      case 'Portfolio':
        return <Portfolio></Portfolio>
      case 'Resume':
        return <Resume></Resume>
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
