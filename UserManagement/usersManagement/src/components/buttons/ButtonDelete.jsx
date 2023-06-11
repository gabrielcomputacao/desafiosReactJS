


// eslint-disable-next-line react/prop-types
export default function ButtonDelete({info, reloadData}){

    function deleteUser(){

        fetch(`https://gorest.co.in/public/v1/users/${info}`, {
            method: 'DELETE',
            headers:{
                'Authorization': "Bearer eca27a104c48ad93b32d5a056478cdd5f628176115d7b2e9b55578282caf9b80"
           },
           
        })
        .then(result =>{ 
            console.log(result);
            fetch('https://gorest.co.in/public/v1/users')
            .then( result => result.json() )
            .then( information => reloadData(information.data))
            .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
    }

    return (
        <div>
            <button onClick={deleteUser}> Deletar Usuario</button>
        </div>
    )
}