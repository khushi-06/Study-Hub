import { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Form() {

    const cookies = new Cookies();
    const navigate = useNavigate();

    // States for registration
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = userLogin;
            if (!email || !password) {
                return toast.error("All fields are mandatory!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            }

            const res = await axios.post("api/auth/login", userLogin);
            const data = res.data;

            if (data) {
                let expirestimeCookie = new Date();
                expirestimeCookie.setTime(expirestimeCookie.getTime() + 30 * 60 * 1000);

                cookies.set("isLogin", "true", { expires: expirestimeCookie });

                navigate("/");
                return toast.success("Login Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            }

        }
        catch (error) {
            return toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="form">

            <form
                method="POST"
                autoComplete="off">

                <label className="label">Email</label>
                <input placeholder="Enter your email " onChange={handleInputs} className="input"
                    value={userLogin.email} type="email" name='email' />

                <label className="label">Password</label>
                <input placeholder="Password" onChange={handleInputs} className="input"
                    value={userLogin.password} type="password" name='password' />

                <button className="btn-login" type="submit" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    );
}