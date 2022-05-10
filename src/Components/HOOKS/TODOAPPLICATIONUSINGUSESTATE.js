import React,{useState} from 'react'

function TODOAPPLICATIONUSINGUSESTATE() {

    const [inputvalue,setInputvalue]  = useState("")
    const [store,setStore] = useState([])

   const handleclick = (e)=>{
       e.preventDefault()
    setStore([...store,inputvalue])
    setInputvalue("")
   }
    return (
        <div>
            <form >
            <input type="text" onChange={(e)=>{setInputvalue(e.target.value)}} value={inputvalue}/>
            <button onClick={(e)=>{handleclick(e)}} type = "submit">TODO</button>
            {store.map((data)=>(
                <h2>{data}</h2>
            ))}
            </form>
        </div>
    )
}

export default TODOAPPLICATIONUSINGUSESTATE
