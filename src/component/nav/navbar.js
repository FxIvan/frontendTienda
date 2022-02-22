import React from 'react'
import logo from '../imagenes/Almendra.svg'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Header = () =>{
    return(
        <div className=''>
            <nav>
                <ul className='row col-12 text-center justify-content-around align-items-center'>
                    <li className='col-2'><Link to={'/'}><img src={logo}/></Link></li>
                    <li className='col-2'><a href='/#nosotros'>Nosotros</a></li>
                    <li className='col-2'><Link to={'/FAQ'}>FAQ</Link></li>
                    <li className='col-2'><Link to={'/productos'}>Productos</Link></li>
                    <li className='col-2'><Link to={'/contacto'}>Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}