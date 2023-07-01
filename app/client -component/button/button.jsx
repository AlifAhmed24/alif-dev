import Link from 'next/link'
import './button.css'

function PrimaryButton({style, color, }) {
    const buttonStyle = {
        color: "red",
        backgroundColor: "blue"
    }             
  return ( 
    <Link style={buttonStyle} className='primary-button' href="/">Hire Me</Link>
  )
}

export default PrimaryButton