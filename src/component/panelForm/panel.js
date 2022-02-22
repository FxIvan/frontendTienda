import React, { useContext, useEffect , useState} from 'react'
import './panelform.css'
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { PetContext } from '../Context/PeticionContext'

export const Panel = () => {

    const [allProduct,setAllProduct] = useState([])
    const {getPanel , getPeticion , deletePeticion , stateDelete} = useContext(PetContext)

    const url = 'https://pagemern.herokuapp.com/cargarproducto/'

    useEffect(()=>{
        getPeticion(url)
    },[])

    const handleDelete = (id) =>{
        deletePeticion(id)
    }

    if(stateDelete){
        window.location.reload(true)
    }

  return (
    <div className="table-responsive row container-fluid m-auto table-panel">
        <div>
            {getPanel.map(name=>(
                //{name.updatedAt.slice(0,-14)}
                <div key={name._id} className='d-flex row col-12 pt-4 m-auto'>
                    <div className='col-4'>
                        <h3>Titulo</h3>
                        <h4>{name.titulo}</h4>
                    </div>
                    <div className='col-2'>
                        <h3>Precio</h3>
                        <h4>{name.precio}</h4>
                    </div>
                    <div className='col-2 text-center'>
                        <h3>Fecha</h3>
                        <h4>{name.updatedAt.slice(0,-14)}</h4>
                    </div>
                    <div className='col-2 text-center'>
                        <h3>Codigo</h3>
                        <h4 class="text-primary">{name.codigo}</h4>
                    </div>
                    <div className='col-2'>
                        <h3>Funciones</h3>
                        <div className='d-flex justify-content-around'>
                            <button type='submit' onClick={()=>handleDelete(name._id)} style={{color: 'red'}}><AiFillDelete size={30}/></button>
                            <Link to={`/toupdate/${name._id}`}><GrUpdate size={25}/></Link>
                        </div>
                    </div>
                </div>
            ))}

            <div className='d-flex flex-row-reverse mt-5 mb-5 mx-5'>
                <Link to={'/cargarproducto'}><button className='btn btn-success'>Cargar Producto</button></Link>
            </div>
        </div>
    </div>
  )
}
