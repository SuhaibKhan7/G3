import React, { useState,useEffect } from 'react'
export  function useFetch( url) {
    const[data,setData]=useState(null)
    useEffect(() => {
        const getdata = async () => {
            let response = await fetch(url)
            let result = await response.json();
                setData(result)
        }
        getdata();
    }, [url])

return data
}
