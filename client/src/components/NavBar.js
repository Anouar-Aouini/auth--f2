import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";
const NavBar = () => {
    const authenticated = useSelector((state) => state.authenticated);
    const dispatch = useDispatch();
    if (authenticated) {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"> Navbar </Navbar.Brand>{" "}
                        <Nav className="me-auto">
                            <Link to="/home">
                                <Nav.Link href="#home"> Home </Nav.Link>{" "}
                            </Link>
                            <Link to="/user/profile">
                                <Button> Profile </Button>{" "}
                            </Link>
                            <Link to="/home">
                                <Button onClick={() => dispatch(logout())}>
                                    {" "}
                                    Logout{" "}
                                </Button>{" "}
                            </Link>
                        </Nav>{" "}
                    </Container>{" "}
                </Navbar>{" "}
            </div>
        );
    } else {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"> Navbar </Navbar.Brand>{" "}
                        <Nav className="me-auto">
                            <Link to="/home">
                                <Nav.Link href="#home"> Home </Nav.Link>{" "}
                            </Link>{" "}
                            <Link to="/user/register">
                                <Nav.Link href="#features"> Register </Nav.Link>{" "}
                            </Link>{" "}
                            <Link to="/login">
                                <Nav.Link href="#login"> Login </Nav.Link>{" "}
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
};

export default NavBar;
