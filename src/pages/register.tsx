import React, {ChangeEvent, useContext, useState} from "react";
import Xhr from "../components/xhr";
import {Form, Button, Alert} from "react-bootstrap";
import {MainContext} from "../components/mainProvider";

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function Register() {
    const [message, setMessage] = useState(<></>);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    const {auth} = useContext(MainContext);

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.currentTarget;
        setData({...data, ...{[name]: value}});
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
    };

    return <>
        {auth ?
            <Alert variant="info">برای عضویت ابتدا از حساب کاربری خود خارج شوید.</Alert>
            :
            <>
                <h1>Register</h1>
                {message}
                <Form onSubmit={submit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={change}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={change}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={change}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirm_password"
                            value={data.confirm_password}
                            onChange={change}
                        />
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
            </>
        }
    </>;
}