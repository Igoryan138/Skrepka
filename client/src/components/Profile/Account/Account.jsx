import React, { useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../../redux/actions/user.action'
// import { useState } from 'react'
// import { useEffect } from 'react'
import styles from './account.module.css'

export default function Account() {

  // const [currentuser, setCurrentUser] = useState({})
  const [mode, setMode] = useState('view') 
  const  user  = useSelector((store) => store.user.user)
  // console.log('USER=======>>>>>>>',user);
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
      
      <div className={styles.profile}>
        <h3 className='h3'>Управление профилем</h3>
        <h5 className='h5'>Имя: {user?.firstName}</h5>
        <h5 className='h5'>Фамилия: {user?.lastName}</h5>
        <h5 className='h5'>E-mail: {user?.email}</h5>
        <h5 className='h5'>Телефон: {user?.phone}</h5>
        <button type="submit" className="btn btn-info mt-2" onClick={() => setMode('edit')}>Редактировать</button>
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
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}  type= 'text'/> <br />
        <input value={lastName} onChange={(e)=>setLastName(e.target.value)}  type= 'text'/> <br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  type= 'text'/> <br />
        <input value={phone} onChange={(e)=>setPhone(e.target.value)}  type= 'text'/> <br />
        <button type="submit" className="btn btn-success">Сохранить</button>
        <button type="submit" className="btn btn-danger" onClick={() => setMode('view')}>Отменить</button>
      </form> 
    )} 
    
    </>
  )
}
