import React from 'react'

interface pricingProps {
  name: string
  price: number
  availability: number
}

export default function CompanionCards ({ name, price, availability }: pricingProps): JSX.Element {
  return (
        <div className="mt-3">
            <div key={name}
            className="rounded-xl text-center mx-2 content-end rounded-b-xl bg-gray-100 p-2"
            >
                    <h1 className="text-2xl font-semibold text-primary">${price}</h1>
                    <p className=" text-gray-500  font-light ">{availability} seats Available</p>
            </div>
        </div>
  )
}
