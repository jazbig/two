import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../redux/actions'
import { Link } from 'react-router-dom'

import CartItem from './cartItem'
import trash from './trash.svg'
import arrow from './grey-arrow-left.svg'
import Plus from './plus'

import Empty from './empty'

const Basket = () => {
  const orders = useSelector(state => state.basket)
  const cost =
    orders.length !== 0
      ? orders.map(item => item.price * item.num).reduce((a, b) => a + b)
      : 0
  const dispatch = useDispatch()
  if (orders.length === 0) {
    return <Empty />
  }
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <Plus />
              Корзина
            </h2>
            <div className="cart__clear">
              <span onClick={() => dispatch(allActions.cleanBasket())}>
                <img src={trash} alt="plus" />
                Очистить корзину
              </span>
            </div>
          </div>
          <div className="content__items">
            <CartItem />
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц:
                <b>
                  {orders
                    ? orders.reduce((prev, cur) => {
                        return prev + cur.num
                      }, 0)
                    : '0'}
                  шт.
                </b>
              </span>
              <span>
                Сумма заказа: <b>{cost} $</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <span>
                  <img src={arrow} alt="plus" />
                  Вернуться назад
                </span>
              </Link>

              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
