import Form from "./form";
import Footer from "./footer";
import Navbar from "./Navbar";


const Register =()=>{
    return(
        <div>
        <Navbar/>
        <div className="loginbox">
        <h1 className="heading">Welcome on Board!</h1>
        <h3 className="tag" color="#FFD700">Let’s help you get onboard.</h3>
        <Form/>
        <div className="login-alert">
        Already have an account ? 
        </div>
        <div className="signin-alert">Sign in</div>
        </div>
        <div>
        <Footer/>
        </div>
        </div>
        
        

    );
}

export default Register;