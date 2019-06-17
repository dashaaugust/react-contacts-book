import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteContact, updateContact } from '../redux/actions/actions'
import Input from '../components/Input'
import { validateContact } from '../utils/utils'

const ContactsItem = ({ contact, deleteContact, updateContact }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ name, changeName ] = useState(contact.name)
  const [ phone, changePhone ] = useState(contact.phone)
  const [ errorName, setErrorName ] = useState('')
  const [ errorPhone, setErrorPhone ] = useState('')

  const handleUpdateContact = () => {
    if (validateContact(name, phone).status) {
      updateContact({ id: contact.id, name: name, phone: phone })
      setIsEditing(false)
    }
    setErrorName(validateContact(name, phone).errorName)
    setErrorPhone(validateContact(name, phone).errorPhone)
  }

  const contactEdit = (
    <>
      <div className='contacts__item-content'>
        <Input
          onChange={changeName}
          value={name}
          required
          error={errorName}
          name='name'
        />
        <Input
          onChange={changePhone}
          value={phone}
          error={errorPhone}
          name='phone'
        />
      </div>
      <div className='contacts__item-button'>
        <div
          id={`btn_${contact.id}`}
          className='button button_save'
          title='сохранить'
          onClick={handleUpdateContact}
        >
          <span role="img" aria-label="save">&#128190;</span>
        </div>
      </div>
    </>
  )

  const contactSave = (
    <>
      <div className='contacts__item-content'>
        <span className='name'>{contact.name}</span>
        <span className='number'>{contact.phone}</span>
      </div>
      <div className='contacts__item-button'>
        <div
          className='button'
          title='редактировать'
          onClick={() => setIsEditing(true)}
        >
          &#128394;
        </div>
        <div
          className='button'
          title='удалить'
          onClick={() => deleteContact(contact.id)}
        >
          &#128937;
        </div>
      </div>
    </>
  )

  return (
    <li className='contacts__item' key={contact.id}>
      { isEditing ? contactEdit : contactSave }
    </li>
  )
}

const mapDispatchToProps = {
  deleteContact,
  updateContact
}

ContactsItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
  updateContact: PropTypes.func
}

export default connect(null, mapDispatchToProps)(ContactsItem)
