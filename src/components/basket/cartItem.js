import React from 'react'
import plus from './plus.svg'
import trash from './trash.svg'

import { useSelector, useDispatch } from 'react-redux'
import allActions from '../../redux/actions'

const CartItem = () => {
  const order = useSelector(state => state.basket)
  const dispatch = useDispatch()

  const cartList = order
    ? order.map((item, i) => {
        return (
          <div key={i} className="cart__item">
            <div className="cart__item-img">
              <img className="pizza-block__image" src={item.src} alt="Pizza" />
            </div>
            <div className="cart__item-info">
              <h3>{item.title}</h3>
              <p>
                {item.pizzaBase}, {item.diameter}
              </p>
            </div>
            <div className="cart__item-count">
              <div
                onClick={() => dispatch(allActions.minus(item))}
                className="button button--outline button--circle cart__item-count-minus"
              >
                <img src={plus} alt="plus" />
              </div>
              <b>{item.num}</b>
              <div
                onClick={() => dispatch(allActions.plus(item))}
                className="button button--outline button--circle cart__item-count-plus"
              >
                <img src={plus} alt="plus" />
              </div>
            </div>
            <div className="cart__item-price">
              <b>{item.price * item.num} $</b>
            </div>
            <div
              onClick={() => dispatch(allActions.deletItem(item))}
              className="cart__item-remove"
            >
              <div className="button button--outline button--circle">
                <img src={trash} alt="plus" />
              </div>
            </div>
          </div>
        )
      })
    : ''
  return cartList
}

export default CartItem
