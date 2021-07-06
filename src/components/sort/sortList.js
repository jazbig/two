import React from 'react'
import API from '../../axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../redux/actions'

const SortList = ({ close }) => {
  const dispatch = useDispatch()
  const iOfSort = useSelector(state => state.sortMenu)
  const [sort, setSort] = useState(0)
  useEffect(() => {
    API.getList('sort').then(res => {
      setSort(res)
    })
  }, [setSort])

  const sortList = sort
    ? sort.map((item, i) => (
        <li
          className={i === iOfSort ? 'active' : ''}
          key={i}
          onClick={() => {
            dispatch(allActions.sortMenu(i))
            dispatch(allActions.openSortMenu())
            close()
          }}
        >
          {item}
        </li>
      ))
    : ''

  return <ul>{sortList}</ul>
}

export default SortList
