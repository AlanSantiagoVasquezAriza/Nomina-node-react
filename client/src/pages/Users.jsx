import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { UseUsers } from "../context/UserProvider";

function UsersList() {

    const { users, loadUsers } = UseUsers();

    useEffect(() => {
        loadUsers();
    }, []);

    function renderMain(){

        if(users.length === 0){
            return <h2>No se encuentran usuarios registrados</h2>
        }else{
            return users.map((user) =>{
                return(
                    <UserCard user={user} key={user.ID}/>
                )
            })
        }

    }
    
    return( 
        <div>
            <h1>Users</h1>

            {renderMain()}

        </div>

    );
}

export default UsersList;