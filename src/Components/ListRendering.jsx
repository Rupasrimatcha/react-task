import React from 'react'


export default function ListRendering() {
    const users=[
    {
    id:1,
      name:'Rupa',
      age:26,
      city:'Eluru',
      Email:'rupa@gmail.com',
      role:'Developer',
    },
    {
      id:2,
      name:'Pavani',
      age:28,
      city:'Vijayawada',
      Email:'pavani@gmail.com',
      role:'Desinger',
     },
    {
      id:3,
      name:'Swapna',
      age:25,
      city:'Pune',
      Email:'Swapnaa@gmail.com',
      role:'Medical Coder',
    },
    {
      id:4,
      name:'Vamsi',
      age:23,
      city:'hyderabad',
      Email:'vamsi@gmail.com',
      role:'Testing',
    }, 
    {
      id:5,
      name:'Jyothi',
      age:25,
      city:'Hyderabad',
      Email:'jyothi@gmail.com',
      role:'SAP',
     }
    ];
  return (
    <div className='container'>
        <h1>users data by List Rendering</h1>
      <div className='user-container'> 
        {   
        users.map((persons)=>(
        <div key={persons.id} className='card'>
        <h2><strong>Name:- </strong>{persons.name}</h2>
        <p><strong>Age:- </strong>{persons.age}</p>
        <p><strong>City:- </strong>{persons.city}</p>
        <p><strong>email:- </strong>{persons.Email}</p>
        <p><strong>Role:- </strong>{persons.role}</p>
        </div>
        ))
        }
       </div> 
    </div>
  )
}


