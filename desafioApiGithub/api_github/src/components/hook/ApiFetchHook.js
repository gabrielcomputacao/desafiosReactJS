import { useEffect, useState } from "react"

export default function ApiFetchHook( org ){

    const [data, setData] = useState([]);
    const [error , setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

  useEffect( () =>{

    fetch(`https://api.github.com/orgs/${org}/repos`)
    .then( result => result.json())
    .then( (data) => setData( data) )
    .catch( (e) => setError(e))
    .finally( () => setIsLoading(false))

  } , []);

    return { data, error , isLoading }
}