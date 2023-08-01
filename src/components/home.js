import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';


const App=() =>{

  return(
      <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      {/* <Footer/> */}
      {/* <ExampleCarouselImage/> */}
      </div>
  );
}

export default App;
