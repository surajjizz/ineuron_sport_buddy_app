import { observable, action, makeObservable } from "mobx";

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
        this.isLoading = status
    }
}
