// import './App.css';
// import Login  from './components/login';
// import {  Routes, Route} from 'react-router-dom'
// import home from './components/home';
// import logo from './logo.svg';
// import Navigation from './components/navigation'; 
// import Herosection from './components/herosection';
// import Ourcontent from './components/ourcontent';



// const App=() =>{

//   return(
//      <Routes>
//       <Route path='/' element ={<home/>}> </Route>
//       <Route path='login' element ={<Login/>}> </Route>
//       </Routes>

//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';
import Login from './components/login';


const App=() =>{

  return(
      <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      <Login/>
      </div>
  );
}

export default App;
