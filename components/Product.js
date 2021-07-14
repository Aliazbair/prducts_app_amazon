import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ product }) => {
    const {id,title, description, price, image, category}=product

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div key={id} className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-md'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
     <Image src={image} width={200} height={140} objectFit="contain" />
      <h4 className='my-3'>{title}</h4>

      {/* rating */}
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2'>{description}</p>

      {/* price */}
      <div className='mt-5'>
        {/* <Currency quantity={price} currency='GBP' /> */}
        <p>{price}</p>
      </div>

      {/* hase prime */}
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      )}
      {/* add to basket btn */}
      <button className='mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500  '>
        Add To Basket
      </button>
    </div>
  )
}

export default Product
