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
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Мои заявки
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                  <Link to="outgoingDeals" className="list-group-item list-group-item-action">Исходящие</Link>
                  <Link to="incomingDeals" className="list-group-item list-group-item-action">Входящие</Link>
                  <Link to="completedDeals" className="list-group-item list-group-item-action">Завершенные</Link>
                </div>
              </div>
            </div>
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
