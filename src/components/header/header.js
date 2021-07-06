import React from 'react'
import Basket from './basket'
import Logo from './logo'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <Basket />
      </div>
    </div>
  )
}

export default Header
