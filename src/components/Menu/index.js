import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-patriflix.png'
import Button from '../Button'
import './Menu.css'


function Menu() {
return (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={logo} alt="Logo PatriFlix" />        
            </a>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
        </Button>
    </nav>
)

}

export default Menu;