import React ,{useRef, useState}from 'react'

export default function UseRefHook() {
    const imgRef=useRef(0)
    const[img,setImg]=useState("")
    const [newProduct, setNewProduct] = useState(true);

    const handleImage=(e)=>{
        const file=e.target.files[0];
        if(file){
            const preview=URL.createObjectURL(file);
            setImg(preview)
            setNewProduct(false)
        }
    }
  return (
    <div className='ref-container'>
      <h3>Image Upload</h3>

      <input type="file" ref={imgRef} hidden onChange={handleImage} />
    {newProduct ?(

    <div onClick={()=>imgRef.current.click()}>
      <button style={{
          border:'5px solid black',
          width:'200px',
          height:'200px',
          textAlign:'center',
          padding:'30px',
          cursor:'pointer',
          backgroundColor:'green'}}>
        {img ? 'change': 'upload'}
      </button>
      </div>
    ):(
      <img src={img} 
        onClick={()=>imgRef.current.click()}
          style={{
            width:'200px',
            padding:'20px',
            height:'200px',
            objectFit:'cover',
            display:'block',
            margin:'auto'}}/>
    )}
      
      
    </div>
  )
}
