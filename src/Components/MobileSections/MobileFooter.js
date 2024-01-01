import React from 'react'

const MobileFooter = () => {
  return (
    <section className='onlyMobile qualitySection'>
        <div className='container'>
        <ul className='flex-class'>
            <li>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Quality_assurance_oaicons.png' />
                <p>quality assurance</p>
            </li>
            <li>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Quality_assurance_oaicons.png' />
                <p>100% secure payment</p>
            </li>
            <li>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Quality_assurance_oaicons.png' />
                <p>shipping globally</p>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default MobileFooter