import style from './Profile.module.css'
import { Link, Outlet } from 'react-router-dom'

export default function Profile() {

  return (
    <div>
      <div className={style.title}>
        <h1>Профиль</h1>
        <br />
      </div>

      <div className={style.menu}>
        <div className={style.menu_left}>
          <div className="list-group">
            <Link to="account" className="list-group-item list-group-item-action" aria-current="true">
              Учетная запись
            </Link>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Мои объявления
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <Link to="advertisements" className="list-group-item list-group-item-action">Активные</Link>
                    <Link to="advertisements/completed" className="list-group-item list-group-item-action">Завершенные</Link>
                  </div>
                </div>
              </div>             
            </div>

            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                  Мои объявления
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <Link to="advertisements" className="list-group-item list-group-item-action">Активные</Link>
                  <Link to="advertisements/completed" className="list-group-item list-group-item-action">Завершенные</Link>
                </div>
              </div>
            </div> */}

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
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
        <div className={style.menu_right}>
          <Outlet />
        </div>
      </div>
    </div>



  )
}
