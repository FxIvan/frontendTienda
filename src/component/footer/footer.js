import React from 'react'
import logo from '../imagenes/Almendra.svg'

export const Footer = () =>{
    return(
        <footer>
                <div className='row col-12 footer-container container-fluid m-auto'>
                    <div className='m-auto'>
                        <div className='text-center'>  <img src={logo} alt='logo'/>  </div>
                        <div className='text-center'>   @Creado por Almendra Ivan    </div>
                    </div>
                </div>
        </footer>
    )
}