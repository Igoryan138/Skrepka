import React from 'react'
import style from './style.module.css'

export function Faq() {
  return (
    <div class={style.faq_container}>


      <h1 class="support-h1">Техническая поддержка</h1>

      <h2 class="FAQ_headers">FAQ</h2>

      <div class="register">
        <h3 class="FAQ_headers">Регистрация  пользователя </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>


      <div class="anketa">
        <h3 class="FAQ_headers">Подача заявки на омбен</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?

        </p>
      </div>


      <div class="lk">
        <h3 class="FAQ_headers">Личный кабинет</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab repellat accusamus obcaecati ipsam ea
          molestias
          minus, officiis aperiam asperiores, impedit sequi sint. Laudantium tempore dicta, veniam incidunt adipisci
          consequatur?
        </p>
      </div>

      <h3 class="FAQ_headers">Контакты технической поддержки</h3>
      <p>
        <strong>e-mail:</strong> skrepka.info@yandex.ru
      </p>
      <p>
        <strong>Контактный телефон поддержки:</strong> 8-800-555-75-75
      </p>


    </div>
  )
}

