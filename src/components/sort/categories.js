import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import API from '../../axios'
import allActions from '../../redux/actions'

const Categories = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    API.getList('categories').then(res => setCategories(res))
  }, [setCategories])

  const dispatch = useDispatch()

  const CategoriesList = categories
    ? categories.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => dispatch(allActions.sortCategories(i + 1))}
          >
            {item}
          </li>
        )
      })
    : ''

  return CategoriesList
}

export default Categories
