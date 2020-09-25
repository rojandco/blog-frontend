import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import * as Pages from "./pages";
import Layout from "./layout/layout";
import MainProvider from "./components/mainProvider";
import {PrivateRoute} from "./components/privateRoute";

function App() {

    return (
        <Router>
            <MainProvider>
                <Layout>
                    <Switch>
                        <Route path="/login" component={Pages.Login}/>
                        <Route path="/register" component={Pages.Register}/>
                        <PrivateRoute exact path="/" component={Pages.Home}/>
                    </Switch>
                </Layout>
            </MainProvider>
        </Router>
    );
}

export default App;
