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
  console.log('USER=======>>>>>>>',user);
  // useEffect(()=>{
  //   axios.post('http://localhost:3100/profile/account', user )
  //     .then(res => setCurrentUser(res.data))
  // }, [])
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [email,setEmail] = useState(user?.email)
  const [phone,setPhone] = useState(user?.phone)
  const dispatch = useDispatch()
  return (
    <>
    {mode === 'view' && (
      <div>
        <div>Имя: {user?.firstName}</div>
        <div>Фамилия: {user?.lastName}</div>
        <div>E-mail: {user?.email}</div>
        <div>Телефон: {user?.phone}</div>
        <button onClick={() => setMode('edit')}>Редактировать</button>
      </div> 
    )} 
     {mode === 'edit' && (
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(editUser({
          firstName,
          lastName,
          email,
          phone
        })).then(()=>{
          setMode('view')
        })
      }}>
        <div>Редактирование</div>
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}  type= 'text'/> 
        <input value={lastName} onChange={(e)=>setLastName(e.target.value)}  type= 'text'/> 
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  type= 'text'/> 
        <input value={phone} onChange={(e)=>setPhone(e.target.value)}  type= 'text'/> 
        <button>Сохранить</button>
        <button onClick={() => setMode('view')}>Отменить</button>
      </form> 
    )} 
    
    </>
  )
}
