import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PetContext } from '../../Context/PeticionContext'
import fotomodelo from '../../imagenes/EukanubaWeb.jpg'

export const AlgunosProductos = () =>{

    const {getPeticion,getPanel} = useContext(PetContext)
    const nuevoArray = getPanel.slice(1,5)

    //useEffect(()=>{
        getPeticion('https://pagemern.herokuapp.com/cargarproducto')
    //},[])

    return(
        <section className='conatiner container-algunosproductos text-center'>
            <h2>ALGUNOS DE NUESTRO PRODUCTOS</h2>
            <div className='d-flex justify-content-center'>
            <div className='col-8 row d-flex justify-content-around'>
            {
                nuevoArray.map(name=>(
                        <div className='col-2 text-center algunoproductos'>
                            <img src={name.imagen} alt='imagen'/>
                            <h4>{name.titulo}</h4>
                            <Link to={`/vermas/${name._id}`}><button className='btn btn-success'>Ver Mas</button></Link>
                        </div>
                ))
            }
            </div>
            </div>
        </section>
    )
}