import React from 'react'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Information from '../components/Information'
import Moneytransfer from '../components/Moneytransfer'
import Stories from '../components/Stories'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
        <Header />
        <Brands />
        <Features />
        <Information />
        <Moneytransfer />
        <Stories />
        <Faq />
        <Contact />
    </>
  )
}

export default Home