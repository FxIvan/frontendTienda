import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PetContext } from '../Context/PeticionContext'
import fotomodelo from '../imagenes/EukanubaWeb.jpg'

export const VerMas = () =>{
    const {id} = useParams()
    const {getIdPeticion,elementId} = useContext(PetContext)
    useEffect(()=>{
        getIdPeticion(id)
    },[])

    return(
        <div className='container'>
            <div className='row col-12'>
                <div className='col-4'>
                    <div className='vermas-imagen'>
                        <img src={fotomodelo} alt='imagen producto'/>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='row col-12 header-target'>
                        <p className='col-12'>CODIGO : <span>{elementId.codigo}</span></p>
                        <h2 className='col-12'>{elementId.titulo}</h2>
                        <h3 className='col-12'>Precio: <span>{elementId.precio}</span></h3>
                        <h4 className='col-12 envios-target'>Envios: Buenos Aires GBA y CABA <span>(consultar precio)</span></h4>
                    </div>
                    <div className='row col-12 m-auto pt-5'>
                        <button className='btn btn-success comprarboton-target'><a href='https://wa.me/541136887781' target='_blank'>Comprar por Whatsapp</a></button>
                        <span id='numerocontacto'>54 1136887781</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 descripcion-target'>
                <h2>Descripcion del Producto:</h2>
                <p>{elementId.descripcion}</p>
            </div>
            <div className='aviso-whatsapp mt-5'>
                <h4>Importante:</h4>
                <li className=''>
                    <ul>1. Ten en mano el <strong>CODIGO</strong> del producto</ul>
                    <ul>2. Al iniciar el chat envia el <strong>CODIGO</strong> y la <strong>CANTIDAD</strong></ul>
                    <ul>3. Nosotros te enviaremos un link de pago de Mercado Pago</ul>
                </li>
            </div>
        </div>
    )
}