import React, {useContext, useState} from "react";
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

    let submit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: {value: string};
            password: {value: string};
        };
        const data: FormData ={
            email: target.email.value,
            password: target.password.value
        };
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
                        <Form.Control type="email" name="email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"/>
                    </Form.Group>
                    <Button type="submit" variant="primary">Login</Button>
                </Form>
            </>
        }
    </div>;
}