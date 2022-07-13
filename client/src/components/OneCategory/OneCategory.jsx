import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function OneCategory() {

  const { name } = useParams()
  console.log('name', name);
  const categories = useSelector((store) => store.category)
  const currentCategory = categories.filter(el => el.identifier === name)[0]

  return (
    <div>Категория {currentCategory?.name}</div>
  )
}
