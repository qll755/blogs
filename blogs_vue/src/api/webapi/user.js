import ajax from './../ajax'
export const login = async (obj) => {
    var url = '/user/finduser'
    var result = await ajax.GET(url, obj)
    if (result[0].code == 0) {
        return true
    } else {
        return false
    }
}