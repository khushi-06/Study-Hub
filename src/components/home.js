import './App.css';
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';


const Home=() =>{

  return(
      <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      </div>
  );
}

export default Home;
