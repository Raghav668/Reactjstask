import {Action} from "./Actiontype"

export const Toadd = (adddata) =>{
    return {
        type : Action.Addtodo,
        payload : adddata
    }
}

export const Todelete = (id) =>{
    return {
        type : Action.Deletetodo,
        payload : id
    }
}