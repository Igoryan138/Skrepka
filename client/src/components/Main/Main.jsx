import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../redux/actions/category.action'
import Search from '../Search/Search'

export function Main() {
  const dispatch = useDispatch()

  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
  }, [dispatch])

  // ! Достаем категории из стора
  const { category } = useSelector((state) => state)
  // console.log('category', category);



  return (
    <main>
      <Search />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {category.map((el) => {
          return (
            <div key={el.id} className="card" style={{width: "18rem"}}>
              <img src={el.logo} className="card-img-top" alt={el.name}/>
                <div className="card-body">
                  <p className="card-text">{el.name}</p>
                </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
