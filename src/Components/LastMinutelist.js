import React from 'react'

const LastMinutelist = ({data}) => {
  return (
    <div className='lastminuteBlueSection'>
        <div>
            <img src={data.img} />
        </div>
        <p>{data.title}</p>
    </div>
  )
}

export default LastMinutelist