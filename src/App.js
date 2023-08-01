import logo from './logo.svg';
import './App.css';
import Login  from './components/login';
import {  Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';
import Footer from './components/footer';
import ExampleCarouselImage from './components/CarouselFadeExample.jsx';


const App=() =>{

  return(
     <Routes>
      {/* <Route path='/' element ={<home/>}> </Route>
      <Route path='login' element={<Login/>}/>
      
      </Route> */}
    {/* <Route path='/' element={<home/>}> </Route> */}
    <Route path='login' element={<Login/>}/>
    </Routes>
     
     

  );
}

export default App;
