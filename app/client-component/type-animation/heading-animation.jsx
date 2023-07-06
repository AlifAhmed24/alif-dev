'use client'

import { TypeAnimation } from "react-type-animation";

function HeadingAnimation() {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Developer',
      2000, // wait 1s before replacing "Mice" with "Hamsters"
      'Designer',
      2000,
    ]}
    wrapper="span"
    speed={10}
    repeat={Infinity}
  />
  )
}

export default HeadingAnimation