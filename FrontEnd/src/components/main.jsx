

const Mainpage=()=>{
    return(
        <div>
            <div className="vertical-navbar">
            <div className="content">
                {/* <div className="FIRST YEAR">
                <li>FIRST YEAR</li>    */}
                                <input classname="dark-light" type="checkbox" id="dark-light" name="dark-light"/>
                    <label for="dark-light"></label>

                    <div classname="light-back"></div> 


                    <div classname="sec-center"> 	
                        <input classname="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                        <label classname="for-dropdown" for="dropdown">Dropdown Menu <i classname="uil uil-arrow-down"></i></label>
                        <div classname="section-dropdown"> 
                            <a href="#">Dropdown Link <i classname="uil uil-arrow-right"></i></a>
                            <input classname="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
                            <label classname="for-dropdown-sub" for="dropdown-sub">Dropdown Sub <i classname="uil uil-plus"></i></label>
                            <div classname="section-dropdown-sub"> 
                                <a href="#">Dropdown Link <i classname="uil uil-arrow-right"></i></a>
                                <a href="#">Dropdown Link <i classname="uil uil-arrow-right"></i></a>
                            </div>
                            <a href="#">Dropdown Link <i classname="uil uil-arrow-right"></i></a>
                            <a href="#">Dropdown Link <i classname="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
    );
}


export default Mainpage;