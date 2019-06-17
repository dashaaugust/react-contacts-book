import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import classNames from 'classnames'

const Input = ({ id, error, onChange, name, ...rest }) => {
  const isName = name === 'name'
  const isPhone = name === 'phone'

  const handleChange = e => {
    onChange(e.target.value)
  }

  const inputClass = classNames({
    input: true,
    'input_error': error,
    'input_type-name': isName,
    'input_type-phone': isPhone
  })

  const inputName = (
    <input
      id={id}
      name={name}
      type="text"
      className="input"
      placeholder="Ф.И.О"
      onChange={handleChange}
      {...rest}
    />
  )

  const inputPhone = (
    <InputMask
      id={id}
      name={name}
      type="text"
      placeholder="+7"
      className="input"
      onChange={handleChange}
      mask="+79999999999"
      {...rest}
    />
  )

  return (
    <div className={inputClass}>
      { isName ? inputName : inputPhone}
      { error && (<span className="error">{error}</span>)}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
