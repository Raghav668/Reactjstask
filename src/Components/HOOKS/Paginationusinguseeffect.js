import React,{useEffect,useState} from 'react'

function Paginationusinguseeffect() {

    const [state , setState] = useState([{}])
    const [num,setNum]=useState(1)
    const getdatafromserver = async () =>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${num}&limit=5`, {
            method : "GET",
            headers : {
                "app-id" : "6149f0f7486331249df48d09"
            }
        })

        const {data} = await response.json()
        setState(data)
        console.log(data)

    }
    useEffect(()=>{
        getdatafromserver()
    },[num])

  
    return (
        <div>
            <h1>PAGINATION</h1>

            <table>
                <thead>
                    <tr>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>TITLE</th>
                        <th>PICTURE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((result)=>(
                            <tr key={result.id}>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td>{result.title}</td>
                            <td><img src={result.picture} alt= "photos"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button onClick={()=>{setNum(1)}}>1</button>
                <button onClick={()=>{setNum(2)}}>2</button>
                <button onClick={()=>{setNum(3)}}>3</button>
            </div>
        </div>
    )
}

export default Paginationusinguseeffect
