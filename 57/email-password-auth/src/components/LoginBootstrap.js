import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        const password = form.password;
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h3 className='text-success'>Please Login !!</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input name='email' type="email" class="form-control" id="formGroupExampleInput" placeholder="Your Email" required/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input name='password' type="password" class="form-control" id="formGroupExampleInput2" placeholder="Your Password" required/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;