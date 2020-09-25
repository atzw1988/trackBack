import { getList } from '../api/api.js'

export async function get (id, callback) {
    const params = {
        userId: id
    }
    const { code, data } = await getList(params)
    console.log(code, data)
    if (code === 200) {
        const list = data
        list.forEach((item, index) => {
            if (index === list.length - 1) {
                item.time = 0
            } else {
                item.time = list[index + 1].inputTime - item.inputTime
            }
        })
        callback(list)
    }
}
