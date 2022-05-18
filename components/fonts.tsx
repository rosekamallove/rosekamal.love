import { Global } from '@emotion/react'
import React from 'react'

const Fonts: React.FC = () => {
  return (
    <Global
      styles={`
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Sriracha&display=swap');
    `}
    />
  )
}

export default Fonts
