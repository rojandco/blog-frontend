import React, {ChangeEvent, useContext, useState} from "react";
import Xhr from "../components/xhr";
import {Form, Button, Alert} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {MainContext} from "../components/mainProvider";

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const [message, setMessage] = useState(<></>);
    const {auth, setAuth} = useContext(MainContext);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.currentTarget;
        setData({...data, ...{[name]: value}});
    };

    let submit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        new Xhr({
            url: "/auth/login",
            data
        }).SendRequest("POST", response => {
            if(response.status){
                setAuth(true);
            }else{
                setMessage(<Alert variant="danger">{response.message}</Alert>);
            }
        });
    };

    return <div>
        {auth ?
            <Redirect to={{pathname: '/'}}/>
            :
            <>
                <h1>Login</h1>
                {message}
                <Form onSubmit={submit}>
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
                    <Button type="submit" variant="primary">Login</Button>
                </Form>
            </>
        }
    </div>;
}