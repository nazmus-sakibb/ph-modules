import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function RegisterReactBootstrap() {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccess(false);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide atleast two uppercase letter');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password should be atleast 6 characters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('plsese add atleast one special character');
            return;
        }

        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail(); 
            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message)
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email for verification');
            })
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleRegister}>
                <h2 className='text-primary'>Please Register !!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User created successfully!</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
        </div>
    );
}

export default RegisterReactBootstrap;