 import React,{useState,useEffect} from 'react'
  
  export default function UseEffectAPI() {
    const[user,setUser]=useState([]);
    const [loading, setLoading] = useState(true);
    const[error,setError]=useState("")


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
        .catch((error)=>{
            setError(error)
            setLoading(false)
        })
    },[])
    console.log(user);
    if(loading){
        return <h6>Loading users...</h6>
    }
    if(error){
        return <h6 style={
            {   color:'red',
                fontSize:'40px',
                padding:'20px',
                margin:'30px',
                textDecoration:'underline',
                textDecorationColor:'yellow'

            }}>Faild to fetch users</h6>
    }
    return (
      <div >
        <h3 style={{
                    fontSize:'3n0px',
                    color:'blue',
                    textAlign:'center'}}>API dynamically fetch data</h3>

            <div className='api-container'>
                {user.map((person)=>(
                    <div key={person.id} className='api-card'>
                        <p><strong>Name:</strong> {person.name}</p>
                        <p><strong>Username</strong>: {person.username}</p>
                        <p><strong>Email: </strong>{person.email}</p>
                        <p><strong>Phone: </strong>{person.phone}</p>
                        <p><strong>Website:</strong> {person.website}</p>
                        <p><strong>Company:</strong> {person.company.name}</p> 
                    </div>
                ))}
            </div>
        
      </div>
    )
  }
  
