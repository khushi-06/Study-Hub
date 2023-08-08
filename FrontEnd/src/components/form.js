import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Form() {

    const navigate = useNavigate();

    // States for registration
    const [user, setUser] = useState({
        name: "",
        department: "",
        phoneNumber: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;

    // Handling the input changes
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, department, phoneNumber, email, password, cpassword } = user;

        if (!name || !department || !phoneNumber || !email || !password || !cpassword) {
            return toast.warning("All fields are mandatory!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }

        if (password !== cpassword) {
            return toast.warning("Password and Confirm Password are not matching!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }

        try {
            const res = await fetch("api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    department,
                    phoneNumber,
                    email,
                    password,
                    cpassword,
                }),
            });

            const data = res.json();

            console.log(data);

            if (data) {
                navigate("/login");
                return toast.success("Registration Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            } else {
                return toast.error("something went wrong server error", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            }
        } catch (error) {
            return toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="form">

            <form
                id="register-form"
                method="POST"
                autoComplete="off"
                onSubmit={PostData}>

                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleInputs} className="input"
                    value={user.name} type="text" name='name' />

                <label className="label">Department</label>
                <input onChange={handleInputs} className="input"
                    value={user.department} type="text" name='department' />

                <label className="label">Phone Number</label>
                <input onChange={handleInputs} className="input"
                    value={user.phoneNumber} type="text" name='phoneNumber' />

                <label className="label">Email</label>
                <input onChange={handleInputs} className="input"
                    value={user.email} type="email" name='email' />

                <label className="label">Password</label>
                <input onChange={handleInputs} className="input"
                    value={user.password} type="password" name='password' />

                <label className="label">Confirm Password</label>
                <input onChange={handleInputs} className="input"
                    value={user.cpassword} type="password" name='cpassword' />

                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}