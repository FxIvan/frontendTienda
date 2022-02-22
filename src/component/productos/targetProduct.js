import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import fotomodelo from '../imagenes/EukanubaWeb.jpg'

export const TargetProduct = ({allProduct}) =>{

    const [stateImagenes,setStateImagenes] = useState(false)

    const urlImagen = 'https://img2.freepng.es/20190131/ijh/kisspng-logo-vector-graphics-illustration-royalty-free-des-content-genie-ecommerce-plugins-for-online-store-5c530003de1c29.7487455115489433639098.jpg'

    useEffect(()=>{
        //const pruebaArray = ['hola','prueba imagen', undefined]
        allProduct.forEach(element =>{ 
            if(element.imagen === undefined){ 
                return element.imagen = urlImagen
            }
            return element.imagen
        })
    },[])    

    console.log(allProduct)

    return(
        <div className='col-12 row container d-flex mt-5'>
        {
            allProduct.map(result=>(
                <div className='col-4 d-flex justify-content-center mt-4'>
                    <div className='col-8 target-container'>
                        <div className='col-12 d-flex justify-content-end span-codigo'>
                            <p className='d-flex'>Codigo <span>{result.codigo}</span></p>
                        </div>
                        <div>
                            <img src={result.imagen} alt='image target'/>
                        </div>
                        <div className='target-text mb-4'>
                            <h2>{result.titulo}</h2>
                            <h3><span>Precio:</span> {result.precio}</h3>
                        </div>
                        <div className='text-center mb-4'>
                            <Link to={`/vermas/${result._id}`} className='vermas-target'>Ver Mas</Link>
                            <button type='button' className='contactar-target'><a href='https://wa.me/541136887781' target='_blank'>Contactar</a></button>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}