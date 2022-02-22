import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { PetContext } from '../Context/PeticionContext'
import './form.css'

export const Form = () => {

  const {petPeticion , loading, getPeticion , getPanel} = useContext(PetContext)
  const [form, setForm] = useState({
    titulo: '',
    precio: '',
    link: '',
    imagen: '',
    codigo:'',
    descripcion: '',
  })
  const [formImage, setFormImage] = useState()

  const [tituloForm,setTituloForm] = useState(false)
  const [precioForm,setPrecioForm] = useState(false)
  const [codigo,setCodigo] = useState(false)
  const nuevoArray = []
  useEffect(()=>{
    getPeticion('https://pagemern.herokuapp.com/cargarproducto')
  },[])

  /*    CAPTURAR DATOS DE LOS INPUT */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleFile = (e) => {
    setFormImage(e.target.files[0])
  }

  console.log("Este es el formImage: ",formImage)

  nuevoArray.push(getPanel.map( x=> x.codigo))
  console.log(nuevoArray[0])
  /*     ENVIAR INFORMACION DE LOS INPUT A MONGODB */
  const handleSubmit =async(e) => {
    e.preventDefault()
    if(form.titulo.length > 41){
      setTituloForm(true)
      return
    }
    if(form.precio.slice(-1) != '$'){
      setPrecioForm(true)
      return
    }

    if(nuevoArray[0].includes(`${form.codigo}`)){
      setCodigo(true)
      return
    }

    const dataForm = new FormData()
    dataForm.append('titulo', form.titulo)
    dataForm.append('precio', form.precio)
    dataForm.append('link', form.link)
    dataForm.append('imagen', formImage)
    dataForm.append('codigo', form.codigo.toUpperCase())
    dataForm.append('descripcion', form.descripcion)
    await petPeticion(dataForm)
    
  }

  console.log(form.titulo)

  if(loading){
    window.location.reload(true)
  }

  return (
    <div className="row container m-auto form-carga">
      <h2 className="text-center col-12 mt-5">Cargar Producto</h2>
      <div className="col-12 d-flex justify-content-center">
        <form
        onSubmit={handleSubmit}
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
            placeholder="Titulo Producto"
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
            placeholder="Precio"
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
            placeholder="Link Mercado libre"
            name="link"
            onChange={handleChange}
          />

          <label htmlFor="formFile" className="form-label">
            Cargar imagen
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="imagen"
            onChange={handleFile}
            accept="image/*"
            required
          />
          {/* BOTON DE SUBIR IMAGEN*/}
          <label>Codigo</label>
          <input
            className="form-control"
            type="text"
            id="formControlInput"
            name="codigo"
            placeholder='Ejemplo: C12'
            onChange={handleChange}
            required
          />
          <p>{codigo ? <p className='text-danger'>Este codigo ya existe, prueba otro</p>:<p>Ingresa el Codigo</p>}</p>
          <div className="form-floating">
            <label htmlFor="floatingTextarea">Descripcion del producto</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="descripcion"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-3 text-center">
            <button type="submit" className="btn btn-success">
              Cargar Producto
            </button>
            <Link to={'/cargarproducto/panelform'}><button className='btn btn-warning mx-2'>Panel Central</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}
