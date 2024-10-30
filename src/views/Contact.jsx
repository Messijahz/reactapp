import React from 'react'
import ContactView from '../components/ContactView'
import ContactAddress from '../components/ContactAddress'
import Navbar2 from '../components/Navbar2'

const Contact = () => {
  return (
    <>
      <div className='wrapper'>
        <Navbar2 />
        <ContactView />
      </div>
      <ContactAddress />
    </>
  )
}

export default Contact