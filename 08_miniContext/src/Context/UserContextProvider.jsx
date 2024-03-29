import React from "react"
import UserContext from "./UserContext"

const userContextProvider = ({children}) => {
    const [User , setUser] = React.useState('')
    return (
        <UserContext.Provider value={{User , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default userContextProvider;