import React, { useState, useEffect } from 'react'
import FaqItem from './FaqItem'
import axios from 'axios'

const FaqList = () => {
  const [faqItems, setFaqItems] = useState ([])

  const getDataUsingFetch = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setFaqItems(data)
  }

  useEffect(() => {
    getDataUsingFetch()
  }, [])


  return (
    <div className="information-box-container">
      {faqItems.map((item) => (
        <FaqItem key={item.id} question={item.title} answer={item.content} />
      ))}
    </div>
  )
}

export default FaqList