import { observable, action, makeObservable } from "mobx";
import AppStorage from "../storage/AppStorage";
import HttpWrapper from "../utils/HttpClient";

export default class LoginStore {
    @observable isLoading: boolean = false;
    @observable fullname: string = '';
    @observable email: string = '';
    @observable phone: string = '';
    @observable password: string = '';

    constructor() {
        makeObservable(this);
    }

    @action async login() {
        var postdata = {
            "email": this.email,
            "password": this.password
        }
        this.setLoaderStatus(true);
        let response = await HttpWrapper().postResponse('users/login', postdata);
        if (response) {
            AppStorage.setAuthenticationStatus(true);
        }
        this.setLoaderStatus(false);
        return response;
    }

    @action async register() {
        var postdata = {
            "fullname": this.fullname,
            "email": this.email,
            "phone": this.phone,
            "password": this.password
        }
        this.setLoaderStatus(true);
        let response = await HttpWrapper().postResponse('users/createuser', postdata);
        this.setLoaderStatus(false);
        return response;
    }

    @action setLoaderStatus = (status: boolean) => {
        this.isLoading = status
    }

}
