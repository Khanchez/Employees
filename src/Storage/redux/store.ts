import { createStore } from "redux";
import * as types from "./actionTypes"



const defaultState = {
    currentEmployeer: {}
}



const reducer = (state: any = defaultState, action: any) => {

    switch (action.type) {

        case types.SET_CURRENT_EMP: 
            return {...state, currentEmployeer: action.payload.currentEmployeer}
        default:
            return state;
    }
}
/*hello*/

const store = createStore(reducer);

export default store;