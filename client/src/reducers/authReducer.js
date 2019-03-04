import { FETCH_USER } from '../actions/types'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //payload will be empty string if logged out, in that case return false
      return action.payload || false
    default:
      return state
  }
}
