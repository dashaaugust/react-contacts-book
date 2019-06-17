import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContactsItem from './ContactsItem'

const Contacts = ({ contacts }) => {
  return (
    <ul className='contacts'>
      {contacts.map(contact => {
        return <ContactsItem
          key={contact.id}
          contact={contact}
        />
      })}
    </ul>
  )
}

const mapStateToProps = state => ({
  contacts: state.contacts.currentPageContacts
})

Contacts.propTypes = {
  contacts: PropTypes.array
}

export default connect(mapStateToProps)(Contacts)
