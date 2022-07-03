import LocalStorage from "./LocalStorage";

export default class AppStorage extends LocalStorage {

    static Login = {
        ISAUTHENTICATED: 'ISAUTHENTICATED',
    };

    static setValue(key: string, value: any) {
        super.set(key, value);
    }

    static getValue(key: string, defaultValue: string = '') {
        if (super.get(key) !== null) {
            return super.get(key);
        } else
            return defaultValue;
    }

    static setAuthenticationStatus(isAuthenticated: boolean) {
        this.setValue(this.Login.ISAUTHENTICATED, isAuthenticated);
    }

    static getAuthenticationStatus() {
        return super.get(this.Login.ISAUTHENTICATED);
    }
}
