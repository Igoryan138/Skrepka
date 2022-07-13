import style from './Profile.module.css'
import { Link, Outlet } from 'react-router-dom'





export default function Profile() {

  return (
    <div>
      <div className={style.title}>
        <br /><br /><br /><br /><br /><br /><br />
        <h1>Профиль</h1>
        <br />
      </div>

      <div className={style.menu}>
        <div className='container'>
          <div className="list-group">
            <Link to="account" className="list-group-item list-group-item-action" aria-current="true">
              Учетная запись
            </Link>
            <Link to="advertisements" className="list-group-item list-group-item-action">Мои объявления</Link>
            <Link to="applications" className="list-group-item list-group-item-action">Мои заявки</Link>
            <Link to="favourites" className="list-group-item list-group-item-action">Избранное</Link>
            <Link to="messages" className="list-group-item list-group-item-action">Сообщения</Link>
          </div>
        </div>
        <div className='container'>
          <Outlet />
        </div>
      </div>
    </div>



  )
}
