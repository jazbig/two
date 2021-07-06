import React from 'react'
import '../scss/app.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './main/main'
import Basket from './basket/basket'
import Header from './header/header'

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </div>
    </Router>
  )
}

export default App
