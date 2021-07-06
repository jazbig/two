import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import API from '../../axios'

import Item from './item'

const PizzaItem = () => {
  const [pizza, setPizza] = useState()
  const active = useSelector(state => state.sortCategories)
  const activeSort = useSelector(state => state.sortMenu)

  useEffect(() => {
    API.getList('pizza').then(res => setPizza(res))
  }, [setPizza])

  const sortCategories = (a, b) => {
    return a.price - b.price
  }

  const i = (a, b) => {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1
    }
    return 0
  }

  const filtrated = pizza
    ? activeSort === 1
      ? pizza
          .filter(item => item.category.find(i => i === active))
          .sort(sortCategories)
      : activeSort === 2
      ? pizza.filter(item => item.category.find(i => i === active)).sort(i)
      : pizza.filter(item => item.category.find(i => i === active))
    : ''

  const items = filtrated
    ? filtrated.map((item, i) => {
        return <Item key={i} item={item} i={i} />
      })
    : 'no data'

  return items
}

export default PizzaItem
