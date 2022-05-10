import { Action } from "./Actiontypesredux"
import Apiurl from "./AxiosRedux"

//export const GetdataAction = (senddata) =>{
//    return {
//        type : Action.getdata,
 //       payload : senddata
//    }
//}

export const FetchdataAction = () => {

    return async (dispatch)=>{
        const response = await Apiurl.get("/products")

         dispatch( {
            type : Action.fetchdata,
            payload : response.data
        })
    }
}

export const Addthecartdata = (productdata)=>{
    return {
          type : Action.addtocart,
            payload : productdata
        }
}

export const Deletethecartdata = (id)=>{
    return {
        type: Action.deletethecart,
        payload : id
    }
}