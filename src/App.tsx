import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./layout/layout";
import MainProvider from "./components/mainProvider";
import {PrivateRoute} from "./components/privateRoute";

function App() {

    return (
        <Router>
            <MainProvider>
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute exact path="/" component={Home}/>
                    </Switch>
                </Layout>
            </MainProvider>
        </Router>
    );
}

export default App;
