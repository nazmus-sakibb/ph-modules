import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterReactBootstrap() {

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }


    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5'>
            <h2 className='text-primary'>Please Register !!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group> 
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default RegisterReactBootstrap;