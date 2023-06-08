import { useEffect, useState } from "react"
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [error , setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () =>{

    fetch('https://api.github.com/orgs/twitter/repos')
    .then( result => result.json())
    .then( (data) => setData( data) )
    .catch( (e) => setError(e))
    .finally( () => setIsLoading(false))

  } , []);

  function handleLike (id){

      const resultado = data.map( (item) => {
        if(item.id === id){
            return {
              ...item,
              liked: !item.liked,
            }
        }
        return item;
      } )
      setData(resultado);
      
  }

  return (
    <div>
      { isLoading && <p> Carregando.. </p>  } 
      {
        data.map( (item) => (
            <div key={item.id} id={item.id}>
                <span> {item.name} - {item.full_name} - {item.owner.login}   </span> <button onClick={ () => handleLike(item.id)} >  { item.liked ? 'Discurtir' : 'Curtir'}  </button>
                <br /> <br />
                
            </div> 
        ))
      }


    </div>
  );
}

export default App;
