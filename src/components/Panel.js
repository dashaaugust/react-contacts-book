import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createContact } from '../redux/actions/actions'
import Input from '../components/Input'
import { validateContact } from '../utils/utils'

const Panel = ({ createContact }) => {
  const [ name, changeName ] = useState('')
  const [ phone, changePhone ] = useState('')
  const [ errorName, setErrorName ] = useState('')
  const [ errorPhone, setErrorPhone ] = useState('')
  const [ count, setCount ] = useState(0)

  const handleCreateContact = () => {
    if (validateContact(name, phone).status) {
      createContact({ id: count, name: name, phone: phone })
      changeName('')
      changePhone('')
      setCount(count + 1)
    }
    setErrorName(validateContact(name, phone).errorName)
    setErrorPhone(validateContact(name, phone).errorPhone)
  }

  return (
    <div className='panel'>
      <div className="panel__content">
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
      <button
        className="panel__button"
        onClick={() => handleCreateContact()}
      >
        Добавить
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  createContact
}

Input.propTypes = {
  createContact: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Panel)
