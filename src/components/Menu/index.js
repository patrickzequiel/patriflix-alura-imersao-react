import React from 'react'
import logo from '../../assets/img/logo-patriflix.png'
import './Menu.css'

function Menu() {
return (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={logo} alt="Logo PatriFlix" />        
            </a>
        <a className="ButtonLink" hreft="/">Novo Vídeo</a>
    </nav>
)

}

export default Menu