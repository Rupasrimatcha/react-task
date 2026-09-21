import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(url){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{
        setLoading(true)
        setError("")
        const fetchApi=async ()=>{
            try{
                const response=await axios.get(url)
                setData(response.data)
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchApi()
    },[url]);
    return { data, loading, error };
}
export default useFetchData;