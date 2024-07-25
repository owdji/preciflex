import React from 'react'

const RightArrow = ({ onClick, color='black'}) => {
  return (
    <svg onClick={onClick} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.517578 17.6899L8.70737 9.5001L0.517578 1.3103" stroke={color === 'black' ? 'black' : 'white'} strokeWidth="1.09571"/>
    </svg>

  )
}

export default RightArrow