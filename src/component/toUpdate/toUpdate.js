import React, { useContext, useEffect , useState } from 'react'
import axios from 'axios'
import { useParams , Link } from 'react-router-dom'
import { PetContext } from '../Context/PeticionContext'

export const ToUpdate = () => {
  const { id } = useParams()

  const {putPeticion , actualizeLoading} = useContext(PetContext)
  const [productDb,setProductDb] = useState([])

  const [tituloForm,setTituloForm] = useState(false)
  const [precioForm,setPrecioForm] = useState(false)

  const [form, setForm] = useState({
    titulo: '',
    precio: '',
    link: '',
    imagen: '',
    codigo:'',
    descripcion: '',
  })

  useEffect(()=>{
    const getId = async()=>{
      const respuesta = await axios.get(`https://pagemern.herokuapp.com/cargarproducto/${id}`)
      setProductDb(respuesta.data)
    }
    getId()
  },[])


  /*    CAPTURAR DATOS DE LOS INPUT */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleActualizar = (e) => {
    e.preventDefault()

    if(form.titulo.length > 41){
      setTituloForm(true)
      return
    }
    if(form.precio.slice(-1) != '$'){
      setPrecioForm(true)
      return
    }

    const dataFormActualizado = new FormData()
    dataFormActualizado.append('titulo', form.titulo)
    dataFormActualizado.append('precio', form.precio)
    dataFormActualizado.append('link', form.link)
    dataFormActualizado.append('descripcion', form.descripcion)
    putPeticion(id,dataFormActualizado)
  }

  if(actualizeLoading){
      window.location.reload(true)
      window.location.href = '/cargarproducto/panelform'
  }

  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
            <h2>{productDb.codigo}</h2>
            <form
              onSubmit={handleActualizar}
              className="form-container col-6"
              encType="multipart/form-data"
            >
              <label htmlFor="formControlInput" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="formControlInput"
                placeholder={`Texto Anterior:${productDb.titulo}`}
                name="titulo"
                onChange={handleChange}
              />
              <p>{tituloForm ? <p className='text-danger'>Supero la Cantidad <span className='text-dark'>{form.titulo.length}</span> tiene que ser menor a 40</p>:<p>Hasta 40 caracteres como maximo {form.titulo.length}</p>}</p>

              <label htmlFor="formControlInput" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control"
                id="formControlInput"
                placeholder={`Precio Anterior:${productDb.precio}`}
                name="precio"
                onChange={handleChange}
              />
              <p>{precioForm ? <p className='text-danger'>Debe contener el simbolo $ a lo ultimo</p>:<p>Estructura Ejemplo: 000$ , 0.000$ o 00.000$</p>}</p>

              <label htmlFor="formControlInput" className="form-label">
                Link
              </label>
              <input
                type="text"
                className="form-control"
                id="formControlInput"
                placeholder={`Link Anterior:${productDb.link}`}
                name="link"
                onChange={handleChange}
              />
              {/* BOTON DE SUBIR IMAGEN*/}
              <div className="form-floating">
                <label htmlFor="floatingTextarea">
                  Descripcion del producto
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder={`Descripcion Anterior: ${productDb.descripcion}`}
                  id="floatingTextarea"
                  name="descripcion"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-3 text-center">
                  <button type="submit" className="btn btn-success">
                    Actualizar
                  </button>
                <Link to={'/cargarproducto/panelform'}>
                  <button className="btn btn-warning mx-2">Cancelar</button>
                </Link>
              </div>
            </form>
          </div>
      </div>
    )
}
