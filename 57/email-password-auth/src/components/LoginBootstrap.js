import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.error('error', error)
            });
    }


    const handleEmailBlur = (e) => {
        const email = e.target.value;
        setUserEmail(email);
        console.log(email);
    }


    const handleForgetPassword = () => {
        if(!userEmail){
            alert('Please enter your email first!');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h3 className='text-success'>Please Login !!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleEmailBlur} name='email' type="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input name='password' type="password" className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            {success && <p className='text-success'>Successfully login to the account!</p>}
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p><small>Forget Passord? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset Passord</button></small></p>
        </div>
    );
};

export default LoginBootstrap;