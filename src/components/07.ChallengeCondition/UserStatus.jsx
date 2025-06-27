import React from 'react'

function UserStatus(props) {
   
   if (props.loggedIn && props.isAdmin) {
    return <h1>Welcome Admin!</h1>
   } else if (props.loggedIn || props.isAdmin){
    return <h1>Welcome user</h1>
   }else{
    return <h1>Site does not have any user</h1>
   }
}

/* 

function App(){
    return(
        <div>
            <UserStatus loggedIn={true} isAdmin={true}/>
        </div>
    )
}

*/

export default UserStatus