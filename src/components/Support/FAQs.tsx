import React from 'react'
import FAQ from './FAQ'
import { type faqs } from '../../types/support.interfaces'

const FAQs = ({ dataset }: { dataset: faqs[] }): JSX.Element => {
  return (
        <div className=" flex flex-col gap-2">
          {
            dataset.map((faq, index) => (
              <FAQ key={index} title={faq.title} desc = {faq.desc}/>
            ))
          }
        </div>
  )
}

export default FAQs
