import React from 'react'
import mun_logo from '../imgs/mun_logo.png' 

const Navigation = () => {
  return (
    <nav className="navbar pure-menu pure-menu-horizontal">
      <img src={mun_logo} alt="MUN logo"/>
      <a href="#" className="pure-menu-heading pure-menu-link">MUNExchange</a>
    </nav>
  )
}

export default Navigation
