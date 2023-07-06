import './services.css'
import Service from './service/service'
import SectionHeading from '../section-heading/section-heading'
import {servicesData} from './servicesData'
import bg from '../../../public/asset/bg-services.svg'
import Image from 'next/image'

function Services() {
  return (
    <div className='services'>
        <Image className="serviceBg" src={bg} alt='servicebg' width='100' height='100'/>
        <div className='container'>
            <SectionHeading heading='SERVICES'  />
            <div className='serviceWrapper'>
            {servicesData.map((service, index) => {
              return (<Service 
              key={index}
              id={index}
              logo={service.logo}
              title={service.title}
              desc={service.desc}
              />
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Services