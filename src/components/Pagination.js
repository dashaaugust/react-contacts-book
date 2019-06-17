import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getContacts } from '../redux/actions/actions'
import { getPages, calcIsRenderMiddleButtons } from '../utils/utils'

const Pagination = ({ contactsList, limit, getContacts }) => {
  const [ currentPage, setCurrentPage ] = useState(1)

  useEffect(() => {
    getContacts(currentPage)
  }, [ currentPage, contactsList, getContacts ])

  const pages = getPages(contactsList, limit)

  const middleButtons = 3
  let isDotsFirstRender = false
  let isDotsLastRender = false

  const isDisabledPrevButton = currentPage === 1
  const isDisabledNextButton = currentPage === pages.length

  return (
    <div className='pagination'>
      <button
        className='button'
        disabled={isDisabledPrevButton}
        onClick={() => setCurrentPage(1)}
      >
        &#60;&#60;
      </button>
      <button
        className='button'
        disabled={isDisabledPrevButton}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#60;
      </button>

      {pages.map(page => {
        const isRender = page === 1 || page === pages.length || calcIsRenderMiddleButtons(middleButtons, currentPage, pages, page)
        if (isRender) {
          return <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={ 'button' + (currentPage === page ? ' button_selected' : '')}
          >
            <span>{page}</span>
          </button>
        } else if (!isDotsFirstRender && page < currentPage - 1) {
          isDotsFirstRender = true
          return <button key="id_1" className='button button_non-active'>...</button>
        } else if (!isDotsLastRender && page > currentPage + 1) {
          isDotsLastRender = true
          return <button key="id_2" className='button button_non-active'>...</button>
        }
        return true
      })}

      <button
        className='button'
        disabled={isDisabledNextButton}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &#62;
      </button>
      <button
        className='button'
        disabled={isDisabledNextButton}
        onClick={() => setCurrentPage(pages.length)}
      >
        &#62;&#62;
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  limit: state.contacts.limit,
  currentPage: state.contacts.currentPage,
  contactsList: state.contacts.contactsList,
  currentPageContacts: state.contacts.currentPageContacts
})

const mapDispatchToProps = {
  getContacts
}

Pagination.propTypes = {
  contactsList: PropTypes.array,
  limit: PropTypes.number,
  getContacts: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
