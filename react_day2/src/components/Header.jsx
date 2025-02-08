import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
    return (
        <header className={props.theme}>
            <h1>abi{props.name}</h1>
            <Navigation/>
        </header>

   
    )
}

export default Header
