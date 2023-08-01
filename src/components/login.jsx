const Login =()=>{
    return(
        <div className="loginbox">
        <h1 className="heading">Welcome on Board!</h1>
        <h3 className="tag" color="#FFD700">Let’s help you get onboard.</h3>
        <div className="inputs">
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>

            
        </div>

    );
}

export default Login;