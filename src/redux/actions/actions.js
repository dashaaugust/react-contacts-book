import * as action from './actionTypes'

export const getContacts = currentPage => {
  return (dispatch) => {
    dispatch({ type: action.GET_CURRENT_PAGE_CONTACTS, payload: currentPage })
  }
}

export const createContact = newContact => {
  return (dispatch) => {
    dispatch({ type: action.CREATE_CONTACT, payload: newContact })
  }
}

export const deleteContact = id => {
  return (dispatch) => {
    dispatch({ type: action.DELETE_CONTACT, payload: id })
  }
}

export const updateContact = updatedContact => {
  return (dispatch) => {
    dispatch({ type: action.UPDATE_CONTACT, payload: updatedContact })
  }
}
