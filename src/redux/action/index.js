// action 类型
export const  type = {
    SWITCHMENU: 'SWITCHMENU',
    ADDITEM:'ADDITEM',
    SUBMITTODO:'SUBMITTODO',
    SETFILTER:'SETFILTER'
}
let nodeId = 0
export function switchMenu(menuName) {
    return {
        type:type.SWITCHMENU,
        menuName :menuName
    }
}
export function addItem (data) {
    return  {
        type:type.ADDITEM,
        data:{...data,id:nodeId++}
    }
}
export function  submitTodo (id) {
    return   {
        type:type.SUBMITTODO,
        id:id
    }
}
export function setFilter (filterType) {
    return  {
        type:type.SETFILTER,
        filter:filterType
    }


}
