import React  from "react";
import nosotros from '../../imagenes/nosotrosIlustracion.svg'

export const Nosotros = () =>{
    return(
        <section className="container nosotros-container mt-5 pb-5">
            <div id="nosotros" className="">
                <div className="col-12 text-center pb-4">
                    <h2 className="pt-5">NOSOTROS</h2>
                </div>
                <div className="row mt-4 col-12">
                    <div className="col-4">
                        <img src={nosotros} alt='nosotros'/>
                    </div>
                    <div className="col-8">
                        <p>
                            Somos una tienda online de ventas de alimentos para animales, nuestro ventas se realizan a traves de whatsapp tambien
                            contamos con productos que se encuentran en mercado libre, contamos con una atencion personalizada
                            dependiendo a la necesidad del cliente que incluye servicio de envio, asegurando la llegada de sus
                            productos a destino
                        </p>
                    </div>
                </div>   
            </div>
        </section>
    )
}