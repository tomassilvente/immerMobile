import React from 'react'
import Link from 'next/link'

interface pricingProps {
  name: string
  price: number
  availability: number
}

export default function CompanionCards ({ name, price, availability }: pricingProps): JSX.Element {
  return (
        <Link href='/'>
            <div key={name}
                className="rounded-xl text-center mx-2 content-end rounded-b-xl bg-gray-100 p-4"
            >
                <h1 className="text-3xl font-semibold text-primary">${price}</h1>
                <p className=" text-lg pt-1 font-light rounded-b-xl">{availability} seats Available</p>
            </div>
        </Link>
  )
}
