interface Cookie {
    name: string;
    value: string;
    days: number;
}

const dayToMilliseconds: number = 1000 * 3600 * 24;

export default class Cookies {
    setCookie = (props: Cookie) => {
        let d = new Date();
        d.setTime(d.getTime() + props.days * dayToMilliseconds);
        let expires = "expires=" + d.toUTCString();
        document.cookie = `${props.name}=${props.value};${expires};path=/`;
    };

    setCookieBatch = (props: Cookie[]) => {
        for(let i = 0; i < props.length; i++){
            let d = new Date();
            d.setTime(d.getTime() + props[i].days * dayToMilliseconds);
            let expires = "expires=" + d.toUTCString();
            document.cookie = `${props[i].name}=${props[i].value};${expires};path=/`;
        }
    };

    getCookie = (name: string) => {
        name+= "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    removeCookie = (name: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    };

    removeCookieBatch = (names: string[]) => {
        for(let i = 0; i < names.length; i++){
            document.cookie = `${names[i]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        }
    };
}