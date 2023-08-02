import Navigation from './navigation'; 
import Herosection from './herosection';
import Ourcontent from './ourcontent';
import Login from './login';


const Home=() =>{

  return(
      <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      <Login/>
      </div>
  );
}

export default Home;
