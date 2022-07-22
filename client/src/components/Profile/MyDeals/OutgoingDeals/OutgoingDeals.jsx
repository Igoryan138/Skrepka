import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OutgoingDealsItem from './OutgoingDealsItem/OutgoingDealsItem'
import './outgoingDeals.css'


export default function OutgoingDeals() {
  const id = useSelector((store) => store.user.user?.id )
  const [myDeals, setMyDeals] = useState()
  const [notMineGoods, setNotMineGoods] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}deal/outgoing/${id}`)
      .then((res) => {
        setMyDeals(res.data.myDeals)
        setNotMineGoods(res.data.notMineGoods)
      })
  }, [id])
  
  console.log(myDeals);
  // console.log(notMineGoods);

  return (
    <div className='outgoingDeals'>
      {myDeals?.map((el, i) => <OutgoingDealsItem key={el.id} el={el} notMineGoods={notMineGoods[i]} />)}
    </div>
  )
}
