import React from 'react'
import Brands from './Brands'
import Features from './Features'
import Information from './Information'
import Moneytransfer from './Moneytransfer'
import Stories from './Stories'
import Faq from './Faq'
import Contact from './Contact'
import Header from './Header'

const Main = () => {
  return (
    
    <main>
        <Header />
        <Brands />
        <Features />
        <Information />
        <Moneytransfer />
        <Stories />
        <Faq />
        <Contact />
    </main>
    
  )
}

export default Main