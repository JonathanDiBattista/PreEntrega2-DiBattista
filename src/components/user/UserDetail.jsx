import React, { useContext } from 'react'
import UserContext from '../../context/userContext/userContext'

const UserDetail = () => {
    const {user} = useContext(UserContext)
    return (
        <>
            <p>Name :{user.name}</p>
            <p>Age: {user.age}</p>
        </>
    )
}

export default UserDetail