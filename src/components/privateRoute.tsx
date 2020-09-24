import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {MainContext} from "./mainProvider";

export const PrivateRoute = ({component, ...rest}: any) => {
    const {auth} = useContext(MainContext);

    const routeComponent = (props: any) => (
        auth ?
            React.createElement(component, props)
            :
            <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};