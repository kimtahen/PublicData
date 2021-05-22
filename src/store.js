import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  isLoading: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'set_loading':
      return {...state, ...rest}
    case 'set_boardData':
      return {...state, ...rest}
    default:
      return state
  }
}

const store = createStore(changeState)
export default store