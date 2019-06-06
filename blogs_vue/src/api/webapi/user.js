import ajax from './../ajax'
export const login = async (obj) => {//登录信息
    var url = '/user/finduser';
    var result = await ajax.GET(url, obj);
    debugger
    return falg(result[0].code)
}
export const GetSes = async () => {
    var url = '/user/stroe'
    var result = await ajax.GET(url);
    debugger
    return falg(result[0].code)
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}