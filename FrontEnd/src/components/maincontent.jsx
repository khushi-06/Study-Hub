import Card from "react-bootstrap/Card";
import DropdownComponent from "./dropdown1";
import { alignPropType } from "react-bootstrap/esm/types";
import DropdownComponent1 from "./dropdown1";
import DropdownComponent2 from "./dropdown2";
import DropdownComponent3 from "./dropdown3";
import DropdownComponent4 from "./dropdown4";
import DropdownComponent5 from "./dropdown5";
import DropdownComponent6 from "./dropdown6";
import DropdownComponent7 from "./dropdown7";



const imageUrl = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80'; // Replace with the actual image URL


const Maincontent = () => {
  return (
    <div>
      <div className="vertical-navbar">
        <div className="head"> FIRST YEAR </div>
        <DropdownComponent1 />
        <DropdownComponent2 />
        <div className="head"> SECOND YEAR </div>
        <DropdownComponent3 />
        <DropdownComponent4 />
        <div className="head"> THIRD YEAR </div>
        <DropdownComponent5 />
        <DropdownComponent6 />
        <div className="head"> FOURTH YEAR </div>
        <DropdownComponent7 />
        <DropdownComponent />
      </div>

      <div className="main-grid">
        <div className="mainsection">
          <div className="Mcard3" style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover', // Adjust background sizing as needed
          backgroundPosition: 'center', // Adjust background position as needed
        }}>
          </div>
        </div>

        <div className="mainsection">
          <div className="Mcard3" style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover', // Adjust background sizing as needed
          backgroundPosition: 'center', // Adjust background position as needed
        }}>
          </div>
        </div>

        <div className="mainsection">
          <div className="Mcard3" style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover', // Adjust background sizing as needed
          backgroundPosition: 'center', // Adjust background position as needed
        }}>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Maincontent;
