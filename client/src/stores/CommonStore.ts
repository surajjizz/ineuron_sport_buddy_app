import { observable, action, makeObservable } from "mobx";

export default class CommonStore {
    login(data: any) {
        throw new Error('Method not implemented.');
    }
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
