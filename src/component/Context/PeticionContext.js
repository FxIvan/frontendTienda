import React,{createContext, useState} from "react";
import Swal from 'sweetalert2'
import axios from "axios";

export const PetContext =  createContext()
export const PeticionesContext = ({children}) =>{

    const [loading,setLoading] = useState(false)
    const [loadingIdProduct,setLoadingIdProduct] = useState(false)
    const [actualizeLoading,setActualizeLoading] = useState(false)
    const [stateDelete,setStateDelete] = useState(false)

    const [elementId,setElementId] = useState([])
    const [getPanel, setGetPanel] = useState([])

    const getPeticion = async(link)=>{
        const getProductos = await axios.get(`${link}`)
        setGetPanel(getProductos.data)
    }

    const petPeticion = async(form) =>{
        await axios.post('https://pagemern.herokuapp.com/cargarproducto', form)
        .then(async(resp)=>{
            await Swal.fire(`${resp.data}`)
            return setTimeout(setLoading(true) , 2000)
        })
        .catch(err=>{
            console.log(err)
            return setLoading(false)
        })
    }

    const getIdPeticion = async(idProducto)=>{
        await axios.get(`https://pagemern.herokuapp.com/cargarproducto/${idProducto}`)
        .then(resp=>{
            console.log(resp.data)
            setLoadingIdProduct(true)
            setElementId(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    const putPeticion = async(id,formProduct)=>{
        await axios.put(`https://pagemern.herokuapp.com/cargarproducto/${id}`, formProduct)
        .then(async(resp)=>{
            await Swal.fire({position:'top-center', icon:'success' , title:`${resp.data}` , showConfirmButton:false , timer:1500})
            return setActualizeLoading(true)
        })
        .catch(async(err)=>{
            await Swal.fire({icon:'error', title:'Error al Actulizar' , text:'Hubo un problema al actualizar :/'})
            return setActualizeLoading(false)
        })
    }

    const deletePeticion = async(id) =>{
        await axios.delete('https://pagemern.herokuapp.com/cargarproducto/' + id)
        .then(async(resp)=>{
            await Swal.fire(`${resp.data}`)
            return setStateDelete(true)
        })
        .catch(async(err)=>{
            await Swal.fire({icon:'error', title:'Error al Eliminar' , text:'Hubo un problema al Eliminar :/'})
            return setStateDelete(true)
        })
    }
    

    return(
        <PetContext.Provider value={{
            petPeticion,
            loading,
            loadingIdProduct,
            getIdPeticion,
            elementId,
            putPeticion,
            actualizeLoading,
            getPanel,
            getPeticion,
            deletePeticion,
            stateDelete
        }}>
            {children}
        </PetContext.Provider>
    )
}