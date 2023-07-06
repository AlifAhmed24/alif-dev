'use client'

import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from '../section-heading/section-heading';
import Review from './review/review';
import './reviews.css'
import {reviewData} from './reviews-data'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Reviews() {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
      const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay ],
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true, 
        speed: 500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      });
    // }
  }, []);

  return (
    <div className='reviews'>
      <div className='container'>
        <SectionHeading heading='reviews' />
        <div className='swiper'>
          <div className='swiper-wrapper'>
            {reviewData.map((review, index) => (
              <div className='swiper-slide' key={index} >
                <Review
                  title={review.title}
                  desc={review.desc}
                  name={review.name}
                  avatar={review.avatar}
                  rating={review.rating}
                />
              </div>
            ))}
          </div>
          <div className='swiper-pagination'></div>
          {/* <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div> */}
        </div>
      </div>
    </div>
  );
}


export default Reviews