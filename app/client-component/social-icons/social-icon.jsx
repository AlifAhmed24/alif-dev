'use client'

import React from 'react'
import 'boxicons'

function SocialIcons({name, classId}) {
  return (
    <>
         <box-icon className={classId} name={name} type='logo'></box-icon>
    </>
  )
}

export default SocialIcons