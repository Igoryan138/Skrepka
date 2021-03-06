import React from 'react'
import style from './style.module.css'

export function Faq() {
  return (
    <div className={style.faq_container}>


      <h1 className="support-h1">Техническая поддержка</h1>

      <h2 className={style.FAQ_headers}>FAQ</h2>

      <div className={style.register}>
        <h4 className={style.FAQ_headers}>Регистрация  пользователя </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>


      <div className={style.anketa}>
        <h4 className={style.FAQ_headers}>Подача заявки на омбен</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?

        </p>
      </div>


      <div className={style.lk}>
        <h4 className={style.FAQ_headers}>Личный кабинет</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>

      <h4 className={style.FAQ_headers}>Контакты технической поддержки</h4>
      <div className={style.info}>
      <p>
        <strong>e-mail:</strong> skrepka.info@yandex.ru
      </p>
      <p>
        <strong>Контактный телефон поддержки:</strong> 8-800-555-75-75
      </p>

      </div>


    </div>
  )
}

