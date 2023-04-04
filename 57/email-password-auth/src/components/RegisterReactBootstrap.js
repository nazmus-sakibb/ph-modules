import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function RegisterReactBootstrap() {
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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
            })
            .catch(error => {
                console.error('error', error);
            })
    }


    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5'>
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
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default RegisterReactBootstrap;