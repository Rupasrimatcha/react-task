import React,{useState} from 'react'

export default function Form() {
    const [formData,setFormData]=useState({
        firstName : '',
        lastName : '',
        email : '',
        mobileNumber : '',
        password : '',
        confirmPassword : '',
        dateOfBirth : '',
        gender : '',
        address : '',
        city : ''
    })
    const [error,setError]=useState('');

    const handleChange=(e)=>{
       const {value,name}=e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefalut()
 
        
        if(!formData.firstName || !formData.email || !formData.password){
            setError('Please Enter First name');
            return;
        }
        setError("");
            console.log(formData);
          alert("Regitration successful")
    }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{error && <p style={{color:'red'}}>{error}</p>}
        </p>
        <label >First Name: 
        <input 
            type="text"
            name='firstName'
            value={formData.firstName} 
            onChange={handleChange}
            placeholder='Enter a First Name'/>
        </label><br />
        <label >Last Name: 
        <input 
            type="text"
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Enetr a Last Name'/>
        </label><br />
        <label >Email: 
        <input 
            type="email" 
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter an Email'/>
        </label><br />
        <label >Mobile Number:
        <input 
            type="text" 
            name='mobileNumber'
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder='Enter Mobile number' />
         </label><br />
        <label >Password: 
        <input 
            type="password" 
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password' />
        </label><br />
        <label >Confirm Password: 
        <input 
            type="password"
            name='confirmPassword' 
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password' />
        </label><br />
        <label >Date of birth:
        <input
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange}/>
         </label><br />
        <label >Gender: 
        <input 
            type="radio" 
            name='gender' 
            value='Female'
            onChange={handleChange}/>Female 
        </label>
        <label>
        <input 
            type="radio" 
            name="gender"
            value='Male'
            onChange={handleChange}/>Male 
        </label>
        <label>
        <input 
            type="radio" 
            name="gender"
            value='Other'
            onChange={handleChange}/>Other 
        </label><br />
        <label >Address: 
        <input 
            type="text" 
            name='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='Enter Adress'/>
        </label><br />
        <label >City:
        <input
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            placeholder='Enter a city'/>
            
         </label><br />
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}


