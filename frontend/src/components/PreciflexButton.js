import React from 'react'
import '../styles/Preciflexbutton.css'

const PreciflexButton = ({value, icon = 'arrow', bold = false, onClick}) => {
    const displayIcon = () => {
        if(icon === 'arrow'){
            return (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.644531 16.0015L15.3472 1.29883M15.3472 1.29883V16.0015M15.3472 1.29883H0.644531" stroke="#006EEB" stroke-width="1.5"/>
            </svg>
            )
        } else if (icon === 'email'){
            return (
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939453 1.52039V12.6944H9.05258H17.1657V1.52039M0.939453 1.52039H17.1657M0.939453 1.52039L9.05258 7.05206L17.1657 1.52039" stroke="#006EEB" stroke-width="1.8"/>
                </svg>
            )
        } else if (icon === 'phone'){
            return(
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.1858 4.73454L5.38939 7.02085C5.56942 8.38637 7.22382 12.2592 10.6514 12.7976L12.9493 11.016L16.2069 12.3437L15.8207 17.3494C4.28196 17.1504 0.158575 8.44741 0.871216 1.82222L5.87932 1.46838L7.1858 4.73454Z" stroke="#006EEB" stroke-width="1.512"/>
                </svg>
            )
        }
    }
  return (
    <div className={bold ? 'preciflexButton' : 'preciflexButtonThin'} onClick={onClick}>
        <p className={bold ? 'button1P' : 'button2P'}>{value}</p>
        {displayIcon()}
    </div>
  )
}

export default PreciflexButton