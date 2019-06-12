// 文章的操作
const before = '/article/';
import ajax from './../ajax';
export const addArticle = async (obj) => {
    var url = before + 'add'
    var result = await ajax.POST(url, obj)
    return falg(result[0].code)
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}