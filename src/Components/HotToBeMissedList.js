import React from 'react'

const HotToBeMissedList = ({data,index}) => {
  return (
    <div className='missedBanner'>
        <img src={data.banner} />
    </div>
  )
}

export default HotToBeMissedList