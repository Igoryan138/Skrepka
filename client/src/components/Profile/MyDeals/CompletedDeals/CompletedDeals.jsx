import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import IncomigCompletedDealsItem from './IncomingCompletedDealsItem/IncomingCompletedDealsItem'
import OutgoingCompletedDealsItem from './OutgoingCompletedDealsItem/OutgoingCompletedDealsItem'

export default function CompletedDeals() {
  const id = useSelector((store) => store.user.user?.id)
  const [myOutgoingGoods, setOutgoingMyGoods] = useState()
  const [notMineOutgoingGoods, setNotMineOutgoingGoods] = useState()
  const [myIncomingGoods, setIncomingMyGoods] = useState()
  const [notMineIncomingGoods, setNotMineIncomingGoods] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}deal/outgoingCompleted/${id}`)
      .then((res) => {
        // console.log('outgoing', res.data);
        setOutgoingMyGoods(res.data.myDeals)
        setNotMineOutgoingGoods(res.data.notMineGoods)
      })
    // console.log(myOutgoingGoods);
    // console.log(notOutgoingMineGoods);

    axios.get(`${process.env.REACT_APP_API_URL}deal/incomingCompleted/${id}`)
      .then((res) => {
        // console.log('incoming', res.data);
        setIncomingMyGoods(res.data.myGoods)
        setNotMineIncomingGoods(res.data.notMineGoods)
      })
    // console.log(myIncomingGoods);
    // console.log(notMineIncomingGoods);
  }, [id])

  return (
    <div>
      {myOutgoingGoods?.map((el, i) => <OutgoingCompletedDealsItem key={el.id} el={el} notMineOutgoingGoods={notMineOutgoingGoods[i]} />)}
      {myIncomingGoods?.map((el, i) => <IncomigCompletedDealsItem key={el.id} el={el} notMineIncomingGoods={notMineIncomingGoods[i]} />)}
    </div>
  )
}
