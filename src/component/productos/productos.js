import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import { TargetProduct } from './targetProduct'

export const Productos = () =>{

    const [getProductos,setGetProductos] = useState([])
    const [tablaProducto,setTablaProducto] = useState([])
    const [busqueda,setBusqueda] = useState("")

        const getPeticion = async()=>{
            await axios.get('https://pagemern.herokuapp.com/cargarproducto')
            .then(result=>{
                setGetProductos(result.data)
                setTablaProducto(result.data)
            })
            .catch(err=>{
                console.log('Error: ',err)
            })
        }
    useEffect(()=>{
        getPeticion()
    },[])


    const handleChange = (e) =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
        console.log(e.target.value)
    }

    const filtrar = (terminobusqueda) =>{
        const resultadoBusqueda = tablaProducto.filter(elemento=>{
            if(elemento.titulo.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
                return elemento;
            }
        })
        setGetProductos(resultadoBusqueda)
    }

    return(
        <div className='mb-5'>
            <div className=''>
                <div className='container input-group text-center col-4 m-auto'>
                    <input type="text" className="form-control" placeholder="¿Que estas buscando?" aria-label="Username" aria-describedby="input-group-right" value={busqueda} onChange={handleChange}/>
                    <span class="input-group-text" id="input-group-right-example"><HiSearch/></span>
                </div>

                <div>
                    {   getProductos &&
                        <TargetProduct allProduct={getProductos}/>
                    }
                </div>
            </div>
        </div>
    )
}