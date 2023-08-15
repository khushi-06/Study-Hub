import Form from "./form_login";
import Navbar from './Navbar';


const Login =()=>{
    return(
        <div>
             <Navbar/>
        
        <div className="loginbox">
        <h1 className="heading">Welcome Back!!</h1>
        <h3 className="tag" color="#FFD700">"Unlock Your Learning Journey".</h3>
        <Form/>
        <div className="login-alert1">
        "New user? 
        </div>
        <div className="signin-alert1">Register now and embark on your learning journey!" </div>
        </div>
        </div>
        

    );
}

export default Login;