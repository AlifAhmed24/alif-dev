import './portfolios.css'
import SectionHeading from '../section-heading/section-heading'
import Portfolio from './portfolio/portfolio'
import {portfolioData} from './portfolios-data'

function Portfolios() {
  return (
    <div className='portfolios'>
        <div className='container'>
            <SectionHeading heading='Project' direction='left'/>
            <div className='portfoliosWrapper'>
            {portfolioData.map((data, index) => {
              return(
                <Portfolio 
                  key={index}
                  thumbnail={data.thumbnail}
                  type={data.type}
                  desc={data.desc}
                />

              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Portfolios