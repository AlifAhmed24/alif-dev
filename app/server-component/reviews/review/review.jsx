import React from 'react'
import './review.css'
import Image from 'next/image'

function Review({title, desc, name, avatar, rating}) {
  return (
    <div className='review'>
        <h2 className='reviewHeader'>{title}</h2>
        <p className='reviewDesc'>{desc}</p>
        <div className='reviewFooter'>
            <div className='reviewer'>
                <div className='reviewerAvatar'>
                    <Image src={avatar} alt='reviewer' width='100' height='100' />
                </div>
                <span>{name}e</span>
            </div>
            <div className='reviewStar'>
                <box-icon type='solid' className='star' name='star'></box-icon>
                <box-icon type='solid' className='star' name='star'></box-icon>
                <box-icon type='solid' className='star' name='star'></box-icon>
                <box-icon type='solid' className='star' name='star'></box-icon>
                <box-icon type='solid' className='star' name='star'></box-icon>
            </div>
        </div>
    </div>
  )
}

export default Review