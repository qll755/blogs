import ajax from './../ajax'
export const login = async (obj) => {//登录信息
    var url = '/user/finduser';
    var result = await ajax.GET(url, obj);
    return falg(result.code)
}
export const GetSes = async () => {//获取登录状态是否存在
    var url = '/user/stroe'
    var result = await ajax.GET(url);
    return falg(result.code)
}
export const delSess = async () => {
    //  取消session
    var url = '/user/out'
    var result = await ajax.GET(url);
    return falg(result.code)
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}