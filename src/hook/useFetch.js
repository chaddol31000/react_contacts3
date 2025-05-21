import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    console.log(url);
    if(!url) 
      return;
    axios.get(url).then(res=>setData(res.data)).catch(error=>setError(error)).finally(()=>setLoading(false));

  },[]);

  return {data, loading, error};
}

export default useFetch