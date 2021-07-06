const store = {
  sortMenu: 0,
  openSortMenu: false,
  sort: '',
  sortCategories: 1,
  base: 'thick',
  diameter: '26 cm',
  price: 0,
  basket: [],
}

const reducer = (state = store, action) => {
  switch (action.type) {
    case 'cleanBasket':
      return { ...state, basket: [] }

    case 'deletItem':
      return {
        ...state,
        basket: state.basket.filter(item => item !== action.value),
      }

    case 'plus':
      const result = state.basket.filter(item => item !== action.value)

      return {
        ...state,
        basket: [...result, { ...action.value, num: action.value.num + 1 }],
      }

    case 'minus':
      const resMinus = state.basket.filter(item => item !== action.value)
      const resOne =
        action.value.num === 1
          ? state.basket
          : [...resMinus, { ...action.value, num: action.value.num - 1 }]
      return {
        ...state,
        basket: resOne,
      }

    case 'sortMenu':
      return { ...state, sortMenu: action.value }

    case 'openSortMenu':
      return { ...state, openSortMenu: !state.openSortMenu }

    case 'addSort':
      return { ...state, sort: action.value }

    case 'addPrice':
      return { ...state, price: action.value }

    case 'sortCategories':
      return { ...state, sortCategories: action.value }

    case 'diameter':
      return { ...state, diameter: action.value }

    case 'base':
      return { ...state, base: action.value }

    case 'addBasket':
      const active = state.basket.find(
        item =>
          item.title === action.value.title &&
          item.diameter === state.diameter &&
          item.pizzaBase === state.base,
      )
      const res = active
        ? [
            ...state.basket.filter(
              item =>
                item.title !== action.value.title ||
                item.diameter !== state.diameter ||
                item.pizzaBase !== state.base,
            ),
            {
              ...action.value,
              num: active.num + 1,
              pizzaBase: state.base,
              diameter: state.diameter,
            },
          ]
        : [
            ...state.basket,
            {
              ...action.value,
              num: 1,
              pizzaBase: state.base,
              diameter: state.diameter,
            },
          ]
      return { ...state, basket: res }

    default:
      return state
  }
}

export default reducer
