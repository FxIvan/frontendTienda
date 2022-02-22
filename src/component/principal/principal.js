import React from 'react'
import './allpageprincipal.css'
import { Contacto } from './contacto/contacto'
import { Nosotros } from './nosotros/nosotros'
import saludo from '../imagenes/Saludo.svg'
import { AlgunosProductos } from './algunosproductos/algunosProductos'

export const Principal = () =>{
    return(
        <div className=''>
            <div className='container banner-principal mt-5 container'>
                <h1 className='m-auto'>Bienvenido a mi Tienda ! </h1>
                <div className='banner-imagen'>
                    <img src={saludo}/>
                </div>
            </div>
            <Nosotros/>
            <Contacto/>
            <AlgunosProductos/>
        </div>
    )
}