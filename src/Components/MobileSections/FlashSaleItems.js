import React from 'react'

const FlashSaleItems = ({data}) => {
  return (
    <div className='items'>
        <img src={data.image} />
        <p>{data.title}</p>
    </div>
  )
}

export default FlashSaleItems