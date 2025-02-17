
import { useEffect,useState } from 'react'
import { Address } from './Address';
import { Company } from './Company';

export const Effecttry = () => {

    const[data,setData]=useState([])
    // const[show,setShow]=useState([])
    // const[loading,setLoading]=useState(true)
       useEffect(()=>{
       //fetch data from an API when the component mounts
       const fetchData = async () => {
        const anyName=await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await anyName.json();
        setData(result)
       };
      fetchData();

      },[])
      
       
        
  return (
    <>
<h1>useEffect,setData try1,2,3</h1>
   {/* {loading?"loading.":"not"} */}
      <div >
        <ul>
          {data.slice(0,3).map((item)=>
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <Address data={item.address}></Address>
            <Company data={item.company}></Company>
           


          </li>
          )}
        </ul>
      </div>
   
    </>
  )
}
