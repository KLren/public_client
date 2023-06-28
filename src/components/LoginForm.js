import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import axios from "axios"



function LoginForm() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    let userID = 0;

    const handleSubmit= async (event)=>{
        event.preventDefault();

        try{
            const res = await axios.post("http://172.18.0.1:80/api/v1/users/login", {
                email: event.target.email.value,
                password: event.target.password.value
            });
            userID = res.data.data.items[0].id
            
            if (userID){
                localStorage.setItem("accessToken", userID) // Should be modified to use the JWT.
                navigate("/");              // Should be modified to redirect to last page.
            }
            
        }catch (error){
            setMessage(`${error}`);
        }

    }

    return (
        <>
        <Form onSubmit={handleSubmit} method="post">
            <Form.Group className="mb-3 login-box" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 login-box" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3 login-check" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <h2>{message}</h2>
        </>
    );
}

export default LoginForm;