import React from 'react'
import Categories from '../sort/categories'
import Sort from '../sort/sort'
import PizzaItem from './pizzaItems'

const Filter = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <div className="categories">
            <ul>
              <Categories />
            </ul>
          </div>
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaItem />
        </div>
      </div>
    </div>
  )
}

export default Filter
