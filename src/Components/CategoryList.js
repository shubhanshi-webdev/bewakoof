import React from 'react'

const CategoryList = ({data,index}) => {
  return (
    <div className='cat-main-div'>
        <div className='cat-poster'>
            <img src={data.img} />
        </div>
        <p className='cat-name'>{data.title}</p>
    </div>
  )
}

export default CategoryList