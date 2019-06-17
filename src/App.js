import React from 'react'
import './app.css'
import Pagination from './components/Pagination'
import Contacts from './components/Contacts'
import Panel from './components/Panel'

function App () {
  return (
    <div className="app">
      <div className="app__content">
        <div className="app__wrap">
          <h1 className="app__title">Cписок контактов</h1>
          <Panel />
          <Contacts />
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default App
