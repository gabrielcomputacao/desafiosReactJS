import { useEffect, useState } from "react"
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [error , setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasLike, setHasLike] = useState([]);

  useEffect( () =>{

    fetch('https://api.github.com/orgs/twitter/repos')
    .then( result => result.json())
    .then( (data) => setData( data) )
    .catch( (e) => setError(e))
    .finally( () => setIsLoading(false))

  } , []);

  function handleLike (id){

    setHasLike( prevState => {
      const exist = prevState.find( element => element.id === id );

      if(exist){

        return prevState.map( item =>{
          if(item.id === id){ 
            return { ...item, liked: !item.liked }
          }else{
            return item;
          }

        })

      }

      return [ ...prevState , { id, liked: true } ]
    })
  }

  return (
    <div>
      { isLoading && <p> Carregando.. </p>  } 
      { error && <p>Erro ao carregar dados</p> }
      {
        data.map( (item) => (
            <div key={item.id} id={item.id}>
                <span> {item.name} - {item.full_name} - {item.owner.login}   </span> <button onClick={ () => handleLike(item.id)} >  {  hasLike.find( element => element.id === item.id) ? 'Descutir' : 'curtir'   }  </button>
                <br /> <br />
                
            </div> 
        ))
      }

      <br /><br /><br />
      <h3>Curtidos</h3>
      <div>
        {
          hasLike.map( element => (
                <div>
                  <span> {element.id} </span>
                  <span> {element.liked} </span>
                </div>
            ))
        }

      </div>


    </div>
  );
}

export default App;
