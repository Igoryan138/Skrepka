import style from './Profile.module.css'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import MyAdvertisements from './MyAdvertisements/MyAdvertisements'
import Account from './Account/Account'
import MyApplications from './MyApplications/MyApplications'
import Messages from './Messages/Messages'
import Favourites from './Favourites/Favourites'



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
            <Link to="profile/account" className="list-group-item list-group-item-action" aria-current="true">
              Учетная запись
            </Link>
            <Link to="profile/advertisements" className="list-group-item list-group-item-action">Мои объявления</Link>
            <Link to="profile/applications" className="list-group-item list-group-item-action">Мои заявки</Link>
            <Link to="profile/favourites" className="list-group-item list-group-item-action">Избранное</Link>
            <Link to="profile/messages" className="list-group-item list-group-item-action">Сообщения</Link>
          </div>
        </div>
        <div className='container'>
          <Routes>
            <Route path="profile">
              <Route path="account" element={<Account />} />
              <Route path="advertisements" element={<MyAdvertisements />} />
              <Route path="applications" element={<MyApplications />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="messages" element={<Messages />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>



  )
}
