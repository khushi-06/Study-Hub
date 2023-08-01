import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';
import Footer from './components/footer';

const navbar=() =>{

  return(
    <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      <Footer/>
    </div>

  );
}

export default navbar;
