/***
 * 数据处理
*/
// import {type} from './../action'
import { type } from '../action' 
import { FilterTypes } from '../../pages/todoList/contants'
const initialState = {
    menuName:'首页',
    data:[],
    todoList:[],
    filter:FilterTypes.All
}   
export default (state = initialState, action ) => {
    switch (action.type) {
        case type.SWITCHMENU:
            return  {...state,menuName: action.menuName}
            break;
        case type.ADDITEM:
        return {...state,todoList:[...state.todoList,action.data]}
        case type.SUBMITTODO:
        state.todoList =  state.todoList.map(item => {
            if (item.id === action.id) {
                return {...item,state:true}
            }else {
                return item
            }
        })
        return {...state,todoList:state.todoList}
        case type.SETFILTER : 
        return  {...state, filter: action.filter}
        default:
        return {...state}
            break;
    }
}