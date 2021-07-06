const sortMenu = i => {
  return {
    type: 'sortMenu',
    value: i,
  }
}

const minus = i => {
  return {
    type: 'minus',
    value: i,
  }
}

const cleanBasket = () => {
  return {
    type: 'cleanBasket',
  }
}

const openSortMenu = () => {
  return {
    type: 'openSortMenu',
  }
}

const sortCategories = i => {
  return {
    type: 'sortCategories',
    value: i,
  }
}

const addBasket = i => {
  return {
    type: 'addBasket',
    value: i,
  }
}

const base = i => {
  return {
    type: 'base',
    value: i,
  }
}

const plus = i => {
  return {
    type: 'plus',
    value: i,
  }
}

const diameter = i => {
  return {
    type: 'diameter',
    value: i,
  }
}

const price = i => {
  return {
    type: 'price',
    value: i,
  }
}

const addSort = i => {
  return {
    type: 'addSort',
    value: i,
  }
}

const deletItem = i => {
  return {
    type: 'deletItem',
    value: i,
  }
}

const allActions = {
  sortMenu,
  openSortMenu,
  addSort,
  sortCategories,
  addBasket,
  diameter,
  base,
  price,
  plus,
  cleanBasket,
  minus,
  deletItem,
}

export default allActions
