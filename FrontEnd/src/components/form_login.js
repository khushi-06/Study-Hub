import { useState } from 'react';
export default function Form() {

// States for registration
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User successfully Logged In!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1 className='fill-alert'>*Please enter all the fields*</h1>
</div>
);
};

return (
<div className="form">


{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>

<label className="label">Email</label>
<input placeholder="Enter your email " onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input placeholder="Password" onChange={handlePassword} className="input"
value={password} type="password" />

<button onClick={handleSubmit} className="btn-login" type="submit">
Login
</button>
</form>
</div>
);
}