import CommonStore from "./CommonStore";
import LoginStore from "./LoginStore";

class RootStore {
    commonStore: CommonStore
    loginStore: LoginStore 

    constructor() {
        this.commonStore = new CommonStore();
        this.loginStore = new LoginStore();
    }
}

export default new RootStore();
