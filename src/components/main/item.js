import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import allActions from '../../redux/actions'
import PizzaBase from './pizzaBase'

const Item = ({ i, item }) => {
  const dispatch = useDispatch()
  const [base, setBase] = useState(0)
  const [diameter, setDiameter] = useState(0)

  const updateBase = value => {
    setBase(value)
  }
  const updateDiameter = value => {
    setDiameter(value)
  }

  const diameterCost = diameter === 0 ? 1 : diameter === 1 ? 1.2 : 1.3
  const baseCost = base === 0 ? 1 : 1.1

  return (
    <div key={i} className="pizza-block">
      <img className="pizza-block__image" src={item.src} alt="Pizza" />
      <h4 className="pizza-block__title">{item.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          <PizzaBase
            items={item.pizzaBase}
            action={(i = 0) => dispatch(allActions.base(item.pizzaBase[i]))}
            func={updateBase}
          />
        </ul>
        {
          <ul>
            <PizzaBase
              items={item.diameter}
              action={(i = 0) =>
                dispatch(allActions.diameter(item.diameter[i]))
              }
              func={updateDiameter}
            />
          </ul>
        }
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {Math.floor(item.price * diameterCost * baseCost)} $
        </div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span
            onClick={() =>
              dispatch(
                allActions.addBasket({
                  ...item,
                  price: Math.floor(item.price * diameterCost * baseCost),
                }),
              )
            }
          >
            Добавить
          </span>
          <i>2</i>
        </div>
      </div>
    </div>
  )
}

export default Item
