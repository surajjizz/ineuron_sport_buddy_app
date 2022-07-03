import { Alert } from "react-native";
import AppDefaults from "../defaults/AppDefaults";
import RootStore from "../stores/RootStore";

class HttpClient {

    baseUrl: string;
    syncTimeout: number;
    isLoader: boolean;

    constructor(baseUrl: any, isLoader = true, timeout = 60) {
        this.baseUrl = baseUrl;
        this.isLoader = isLoader;
        this.syncTimeout = timeout;
    }

    async httpFetch(url: any, config: any) {
        url = this.baseUrl ? this.baseUrl + url : url;
        this.syncTimeout = this.syncTimeout * 1000;
        if (this.isLoader) {
            RootStore.commonStore.setLoaderStatus(true)
        }
        let response: any = null;
        try {
            response = await this.timeout(this.syncTimeout, fetch(url, config));
        } catch (err: any) {
            if (err == 'forbidden') {
                throw err;
            } else {
                Alert.alert("Exception", err?.message + (err?.message?.toLowerCase()?.includes('network request failed') ? ".Please Check internet connection " : ""))
                // CommonUtils.snackBar(async ()=>{await this.httpFetch(url,config)},"Please Check Your Internet Connection","RETRY")
            }
        } finally {
            if (this.isLoader) {
                RootStore.commonStore.setLoaderStatus(false);
            }
        }

        return response;
    }

    async get(url: string) {
        let config: any = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return this.httpFetch(url, config);
    }

    async post(url: string, body: object, method: string) {
        let config = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        return this.httpFetch(url, config);
    }

    timeout(ms: any, promise: any) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error("timeout"))
            }, ms);
            promise.then(resolve, reject)
        })
    }

    async getResponse(url: string) {
        let retResp: any
        const response: any = await this.get(url);
        if (response == null) { return null; }

        try {
            if (response.ok) {
                retResp = await response.json();
            }
        }
        catch (e: any) {
            retResp = {}
        }
        return retResp
    }

    async postResponse(url: string, body: object, method: string = 'POST') {
        let retResp: any = null
        const response: any = await this.post(url, body, method);
        console.log("response",response)
        if (response == null) { return null; }
        try {
            if (response.ok) {
                retResp = await response.json();
            }
        }
        catch (e: any) {
            response.text().then(function (text: any) {
                console.log("Error Response")
                console.log(text)
            })
        }

        return retResp;
    }
}

const HttpWrapper=(url=AppDefaults.baseURL)=> new HttpClient(url);

export default HttpWrapper;
