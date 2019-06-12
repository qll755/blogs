// 文章类别的接口
const before = '/articleType/';
import ajax from './../ajax';
export const addArticleType = async (obj) => {
    var url = before + 'add'
    var result = await ajax.POST(url, obj)
    return result
}
function falg(num) {
    if (num == 0) {
        return true
    } else {
        return false
    }
}