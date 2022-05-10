import { Action } from "./Actiontypesredux";

const initialstate = {
   // finaldata : [],
    fetcheddata : [],
    cartdata : []
}

export const reducer = (initialdata = initialstate , action)=>{
    switch(action.type){
        //case Action.getdata:
          //  return {...initialdata, finaldata:action.payload }
        case Action.fetchdata:
            return {...initialdata, fetcheddata:action.payload}    
        case Action.addtocart:
            return {...initialdata , cartdata : [...initialdata.cartdata , action.payload]}
      //  case Action.deletethecart:
      //     return initialdata.cartdata.filter((index)=>{
      //         console.log(index)
       //        console.log(index.id)
       //        console.log(action.payload)
       //         if(index.id !== action.payload){
        //        return index.product
        //   }} )   

        default:
            return initialdata    
    }

}