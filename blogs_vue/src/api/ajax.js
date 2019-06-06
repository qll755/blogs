import Axios from "axios";
const axios_con = {
    baseURL: 'http://localhost:3000/api'
}
class Ajax {
    constructor() {
        this.ajax = Axios.create(axios_con)
    }
    async GET(url, data = {}) {
        var conf = {
            method: 'get',
            url,
            params: data
        }
        var result = await this.http(conf)
        return result
    }
    async POST(url, data) {
        var conf = {
            method: 'post',
            url,
            data
        }
        var result = await this.http(conf)
        return result
    }
    async http(conf) {
        // try {
        let ajax = this.ajax;
        ajax.defaults.withCredentials = true;
        let result = await ajax(conf)
        return new Promise((res, rej) => {
            if (result.status === 200) {
                console.log('请求成功,信息为:   ' + JSON.stringify(result.data))
                res(result.data)
            } else {
                console.log('请求失败,信息为:   ' + result)
                console.log('请联系后台人员    qq:1532900523')
            }
        })
        // } catch{
        //     console.log('发生了不可预料的结果')
        // }
    }
}


var ajax = new Ajax();
export default ajax