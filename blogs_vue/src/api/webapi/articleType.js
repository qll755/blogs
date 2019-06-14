// 文章类别的接口
const before = '/articleType/';
import ajax from './../ajax';
export const addArticleType = async (obj) => {
    var url = before + 'add';
    var result = await ajax.POST(url, obj)
    return result
}
export const articleTypeList = async () => {
    var url = before + 'list';
    var result = await ajax.GET(url)
    return result
}
export const articleTypeDelete = async (obj) => {
    var url = before + 'delete';
    var result = await ajax.GET(url, obj)
    return falg(result.code)
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}