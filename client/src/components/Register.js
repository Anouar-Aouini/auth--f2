import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { register } from "../redux/actions/actions";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
    const load = useSelector((state) => state.load);
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: null,
    });
    const change = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    const add = (e) => {
        e.preventDefault();
        dispatch(register(newUser, history));
    };
    if (load) {
        return <h1>Loading ...</h1>;
    } else {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter your name"
                        name="name"
                        onChange={(e) => change(e)}
                    />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        onChange={(e) => change(e)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => add(e)}>
                    Register
                </Button>
            </Form>
        );
    }
};

export default Register;
