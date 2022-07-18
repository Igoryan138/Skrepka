import React, { useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../../redux/actions/user.action'
// import { useState } from 'react'
// import { useEffect } from 'react'

export default function Account() {

  // const [currentuser, setCurrentUser] = useState({})
  const [mode, setMode] = useState('view') 
  const  user  = useSelector((store) => store.user.user)
  // useEffect(()=>{
  //   axios.post('http://localhost:3100/profile/account', user )
  //     .then(res => setCurrentUser(res.data))
  // }, [])
  const [firstName, setFirstName] = useState(user?.firstName)
  const dispatch = useDispatch()
  return (
    <>
    {mode === 'view' && (
      <div>
        <div>{user?.firstName}</div>
        <button onClick={() => setMode('edit')}>Редактировать</button>
      </div> 
    )} 
     {mode === 'edit' && (
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(editUser({
          firstName
        })).then(()=>{
          setMode('view')
        })
      }}>
        <div>Редактирование</div>
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}  type= 'text'/> 
        <button>Сохранить</button>
        <button onClick={() => setMode('view')}>Отменить</button>
      </form> 
    )} 
    
    </>
  )
}
