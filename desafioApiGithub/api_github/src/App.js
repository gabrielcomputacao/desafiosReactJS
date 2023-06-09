import {  useEffect, useState } from "react"
import './App.css';
import ApiFetchHook from "./components/hook/ApiFetchHook";


function App() {

  const [hasLike, setHasLike] = useState([]);
  const { data,error,isLoading } = ApiFetchHook('google');

    useEffect( ()=>{

      const storage = localStorage.getItem('haslike');

      if(storage){
        setHasLike( JSON.parse(storage) );
      }

    }, []);

    useEffect( () =>{

      if(hasLike.length === 0) return;

      localStorage.setItem( 'haslike' , JSON.stringify(hasLike) );

    }, [hasLike])

  function handleLike (id){

    setHasLike( prevState => {
      const exist = prevState.find( element => element.id === id );

      if(exist){

        return prevState.map( item => {
          if(item.id === id){ 
            console.log('entrou');
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
                <span> {item.name} - {item.full_name} - {item.owner.login}   </span> <button onClick={ () => handleLike(item.id)} >  {  hasLike.find( element => element.id === item.id && element.liked ) ? 'Descutir' : 'curtir'   }  </button>
                <br /> <br />
                
            </div> 
        ))
      }

      <br /><br /><br />
      <h3>Curtidos</h3>
      <div>
        {
          hasLike.filter( element => element.liked).map( element => 
            (
               <div key={element.id}>
                  <span> {element.id} </span>
                  <span> {element.liked} </span>
                </div>
            )
           )
        }

      </div>


    </div>
  );
}

export default App;
