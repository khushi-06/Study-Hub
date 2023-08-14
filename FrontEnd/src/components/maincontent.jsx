
import Card from 'react-bootstrap/Card';
import DropdownComponent from './dropdown';
import { alignPropType } from 'react-bootstrap/esm/types';
const Maincontent=()=>{
    return(
        <div>
            <div className="vertical-navbar">
            <div className="head"> FIRST YEAR </div>
            <DropdownComponent/>
            <DropdownComponent/>
            <div className="head"> SECOND YEAR </div>
            <DropdownComponent/>
            <DropdownComponent/>
            <div className="head"> THIRD YEAR </div>
            <DropdownComponent/>
            <DropdownComponent/>
            <div className="head"> FOURTH YEAR </div>
            <DropdownComponent/>
            <DropdownComponent/>

            </div>

            <div className="mainsection">
            <div className='Mcard3'>
                <h3 >Hello</h3>

        <Card.Text>
      
          
        </Card.Text>
    </div>
            </div>
        </div>


        
    );
}


export default Maincontent;

