'use server'

import Image from 'next/image';
import './home.css';
import SliderIcon from '../../../public/asset/slider-icon.svg'
import PrimaryButton from '../../client -component/button/button'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='slider-icon'>
            <Image src={SliderIcon} />
        </div>
        <div className='slider-info'>
            <div className='description'>
                <h1>Professional Full Stack Web <span>Developer</span></h1>
                <p>
                As a skilled Full Stack Web Developer with expertise in the MERN stack and diverse technologies, I deliver innovative solutions that exceed expectations. With a passion for exceptional web experiences, I bring a collaborative mindset, problem-solving skills, and a commitment to on-time project delivery. Let's create impactful digital solutions together.
                </p>
            </div>
            <div className='slider-buttons'>
                <PrimaryButton />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home