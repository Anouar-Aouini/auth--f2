import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { login } from "../redux/actions/actions";

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const add = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => change(e)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => change(e)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => add(e)}>
                Login
            </Button>
        </Form>
    );
};

export default Login;
