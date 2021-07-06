import React, { useState } from 'react'

const PizzaBase = ({ items, action, func }) => {
  let [i, setI] = useState(0)

  return items.map((item, index) => (
    <li
      onClick={() => {
        action(index)
        setI((i = index))
        func(index)
      }}
      className={i === index ? 'active' : ''}
      key={index}
    >
      {item}
    </li>
  ))
}

export default PizzaBase
