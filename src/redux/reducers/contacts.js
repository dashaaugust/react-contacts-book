import * as action from '../actions/actionTypes'
import { sortByName } from '../../utils/utils'
import { contacts } from './constans'

const initialState = {
  limit: 5,
  contactsList: contacts,
  currentPageContacts: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case action.GET_CURRENT_PAGE_CONTACTS:
    const { limit, contactsList } = state
    const sortedContactsList = sortByName(contactsList)
    const firstCount = limit * payload - limit
    const currentPageContacts = sortedContactsList.slice(firstCount, firstCount + limit)
    return { ...state, currentPageContacts }

  case action.CREATE_CONTACT:
    const newContactsList = [ payload, ...state.contactsList ]
    return { ...state, contactsList: newContactsList }

  case action.DELETE_CONTACT:
    const filteredContactsList = state.contactsList.filter(item => item.id !== payload)
    return { ...state, contactsList: filteredContactsList }

  case action.UPDATE_CONTACT:
    const updatedContactsList = state.contactsList.map((item) => {
      return item.id === payload.id ? payload : item
    })
    return { ...state, contactsList: updatedContactsList }

  default:
    return state
  }
}
