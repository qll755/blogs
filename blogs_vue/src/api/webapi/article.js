// 文章的操作
const before = '/article/';
import ajax from './../ajax';
export const addArticle = async (obj) => {
    var url = before + 'add';
    var result = await ajax.POST(url, obj)
    return falg(result.code)
}
export const articleList = async (obj) => {
    var url = before + 'list';
    var result = await ajax.GET(url, obj)
    if (result.code == 1) {
        return false
    } else {
        return result.data
    }
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}