import { createContext,useReducer } from "react";


export const Store = createContext();


const initialState ={
    userInfo : localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) :
    null,
    employee_view :localStorage.getItem('employee_view') ?
    JSON.parse(localStorage.getItem('employee_view')) :
    null,
    customer_view :localStorage.getItem('customer_view') ?
    JSON.parse(localStorage.getItem('customer_view')) :
    null,
}
function reducer (state,action) {
        switch(action.type) {
            case 'USER_SIGNIN':
                return {...state,userInfo:action.payload};
            case 'EMLPLOYEE_ADD' :
                return {...state,employee_add:action.payload};
            case 'USER_SIGNOUT' :
                return {
                    ...state,
                    userInfo:null,
                    employee_add :[],
                    employee_view:[],
                }
            case 'EMPLOYEE_VIEW' :
                return {...state,employee_view:action.payload};
            case 'CUSTOMER_VIEW' :
                return {...state,customer_view:action.payload};
            case 'CUSTOMER_ADD' :
                return {...state,customer_add:action.payload};
            default:
                return state;
        }
}

export function StoreProvider(props) {
    const[state,dispatch] = useReducer(reducer,initialState);
    const value = {state,dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}