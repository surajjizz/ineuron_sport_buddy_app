import { observable, action, makeObservable } from "mobx";
import { GestureResponderEvent } from "react-native";

export default class CommonStore {
    @observable isLoading: boolean = false;

    constructor() {
        makeObservable(this);
        this.init()
    }

    @action resetData() {
        this.isLoading = false;
    }

    @action async init() {
        // this.country = await AppStorage.getCountry()
    }

    @action setLoaderStatus = (status: boolean) => {
        console.log("status",status)
        this.isLoading = status
    }

    @action login = (data: GestureResponderEvent) => {
        console.log(data)
    }
}
