import {reactLocalStorage} from 'reactjs-localstorage';

class Auth {
    constructor(){
        let auth = reactLocalStorage.getObject('auth');
        this.authenticated = auth.access_token ? {access_token : auth.access_token, refresh_token : auth.refresh_token} : false;
    }

    login(){
        let auth = reactLocalStorage.getObject('auth');
        this.authenticated = auth.access_token ? {access_token : auth.access_token, refresh_token : auth.refresh_token} : false;
    }

    logout(){
        this.authenticated = false
        reactLocalStorage.clear()
        setTimeout(() => {
            document.location.href = window.location.origin+'/login'
        },200)
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth()