import Axios, {AxiosRequestConfig} from "axios";

interface XhrProps {
    url: string;
    data: object;
}

interface Output {
    status: boolean;
    message?: string;
    data?: object;
}

interface CallBackFunc {
    (o: Output): void;
}

export default class Xhr {
    props: XhrProps;

    constructor(props: XhrProps) {
        this.props = props;
        Axios.defaults.baseURL = "http://localhost:3000/v1";
    }

    SendRequest = (method: AxiosRequestConfig["method"], cb: CallBackFunc): void => {
        let options: AxiosRequestConfig = {
            url: this.props.url,
            method,
            params: method === "GET" ? this.props.data : {},
            data: method !== "GET" ? this.props.data : {},
        };

        Axios(options).then(response => {
            console.log(response);
            if(response.data.code){
                cb({
                    status: false,
                    message: response.data.message
                });
            }else{
                cb({
                    status: true,
                    data: response.data
                });
            }
        }).catch(reason => {
            cb({
                status: false,
                message: reason.response.data.message
            });
        });
    };
}