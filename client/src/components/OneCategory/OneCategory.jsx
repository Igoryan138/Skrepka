import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function OneCategory() {
  const { name } = useParams()

  const categories = useSelector((store) => store.category)

  // ! Завели стейт для текущей категории
  const [currentCategory, setCurrentCategory] = useState({})

  // ! При первом рендере перезаписывает стейт меняя его на тот который лежит в редаксе
  useEffect(() => {
    setCurrentCategory(() => categories.filter(el => el.identifier === name)[0])
  }, [categories, name])

  return (
    <div>Категория {currentCategory.name}</div>
  )
}
