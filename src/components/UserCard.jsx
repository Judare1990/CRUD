import React from 'react'

const UserCard = ({ user, deleteUserById, setupdateInfo, handleOpen}) => {

const handleDelete = () => {

    deleteUserById(user.id)

}

const handleUpdate = () => {

    setupdateInfo(user)
    handleOpen()

}

  return (
    <article className='user__card-box'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email: </span>{user.email}</li>
            <li><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <div className='btn__cards'>
        <button className='btn__delete btn__hover' onClick={handleDelete}>Delete</button>
        <button className='btn__update btn__hover' onClick={handleUpdate}>Update</button> 
    </div>
    </article>
  )
}

export default UserCard