import React, {useContext} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {MainContext} from "../components/mainProvider";

export default function Header() {
    const {auth, logout} = useContext(MainContext);

    return (
        <header>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand>
                    <Link to="/">Admin Panel</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav"/>
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="mr-auto"/>
                    {auth ?
                        <Nav.Item>
                            <Link to="#" onClick={logout}>Logout</Link>
                        </Nav.Item>
                        :
                        <Nav.Item>
                            <Link to="/login">Login</Link>
                        </Nav.Item>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}