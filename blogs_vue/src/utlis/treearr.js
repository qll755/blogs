var arr = [
    {
        "id": 1,
        "typename": null,
        "f_id": "0"
    },
    {
        "id": 2,
        "typename": "测试",
        "f_id": "1"
    },
    {
        "id": 3,
        "typename": "测试1",
        "f_id": "1"
    },
    {
        "id": 4,
        "typename": "测试1-1",
        "f_id": "3"
    },
    {
        "id": 5,
        "typename": "测试111111",
        "f_id": "4"
    },
    {
        "id": 6,
        "typename": "测试2",
        "f_id": "0"
    },
    {
        "id": 7,
        "typename": "1",
        "f_id": "0"
    },
    {
        "id": 8,
        "typename": "1",
        "f_id": "0"
    },
    {
        "id": 9,
        "typename": "1",
        "f_id": "0"
    },
    {
        "id": 10,
        "typename": "12",
        "f_id": "9"
    }
]
export const setChildren = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i].children = []
    }
    if (arr[0].f_id != 0) {
        var tmp = arr.unshift();
        var tmp0 = '';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].f_id == 0) {
                tmp0 = arr[i];
                arr[i] = tmp;
                arr[0] = tmp0;
                break
            }
        }
    }
    return getnew(arr, 0)
}
function getnew(arr, id) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].f_id == id) {
            newarr.push(arr[i])
            arr[i].children = getnew(arr, arr[i].id)
        }
    }
    return newarr
}
