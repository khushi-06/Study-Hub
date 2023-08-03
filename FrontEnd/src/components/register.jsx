import Form from "./form";


const Register =()=>{
    return(
        <div className="loginbox">
        <h1 className="heading">Welcome on Board!</h1>
        <h3 className="tag" color="#FFD700">Let’s help you get onboard.</h3>
        <Form/>
        <div className="login-alert">
        Already have an account ? 
        </div>
        <div className="signin-alert">Sign in</div>
        </div>
        

    );
}

export default Register;