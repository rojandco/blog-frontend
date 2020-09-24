import React, {Component, createContext} from "react";

type main = {
    auth: boolean;
    setAuth: any;
    logout: any;
};

export const MainContext = createContext<main>({
    auth: false,
    setAuth: null,
    logout: null
});

export default class MainProvider extends Component<{}, main>{
    constructor(props: {}) {
        super(props);
        this.state = {
            auth: false,
            setAuth: this.setAuth,
            logout: this.logOut
        };
    }

    setAuth = (value: boolean) => {
        this.setState({auth: value});
    };

    logOut = () => {
        this.setAuth(false);
    };

    render(){
        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}