import React from 'react'
import style from './style.module.css'

export function Faq() {
  return (
    <div className={style.faq_container}>


      <h1 className="support-h1">Техническая поддержка</h1>

      <h2 className="FAQ_headers">FAQ</h2>

      <div className="register">
        <h3 className="FAQ_headers">Регистрация  пользователя </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>


      <div className="anketa">
        <h3 className="FAQ_headers">Подача заявки на омбен</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?

        </p>
      </div>


      <div className="lk">
        <h3 className="FAQ_headers">Личный кабинет</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>

      <h3 className="FAQ_headers">Контакты технической поддержки</h3>
      <p>
        <strong>e-mail:</strong> skrepka.info@yandex.ru
      </p>
      <p>
        <strong>Контактный телефон поддержки:</strong> 8-800-555-75-75
      </p>


    </div>
  )
}

