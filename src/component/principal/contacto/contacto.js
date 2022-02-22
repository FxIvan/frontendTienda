import React from 'react'
import {GrSecure} from 'react-icons/gr'
import {RiOpenArmLine} from 'react-icons/ri'
import {FaBalanceScale} from 'react-icons/fa'

export const Contacto = () =>{

    return(
        <section className='contacto-whatsapp mt-5 pt-5 pb-5'>
            <div className='m-auto'>
                <h2 className='text-center'>Compra a traves de Whatsapp</h2>
                <p className='col-6 m-auto'>Así es! Nos dices el código del producto, la cantidad y nosotros te generamos un link de pago,además de
                este puedes preguntar mas sobre el producto a través de nuestro whatsapp y coordinar el envio.</p>
                <h3 className='text-center mt-3 mb-4'>Mas</h3>
            </div>
            <div className='container d-flex row m-auto text-center'>
                <div className='col-4'>
                    <GrSecure size={110} className='pb-2'/><br/>
                    <span>Seguro</span>
                </div>
                <div className='col-4'>
                    <RiOpenArmLine  size={110} className='pb-2'/><br/>
                    <span>Atencion <br/> personalizada</span>
                </div>
                <div className='col-4'>
                    <FaBalanceScale  size={110} className='pb-2'/><br/>
                    <span>Viable</span>
                </div>
            </div>
            <div className='container mt-5'>
                <div>
                    <h4>A tener en cuenta al hacer la compra por Whatsapp</h4>
                    <ul>
                        <li>1. Ten anotado el codigo del producto, Ejemplo: <strong>C12</strong></li>
                        <li>2. Haz click en el boton <strong>CONTACTAR</strong> y te derivara a nuestro whatsapp</li>
                        <li>3. Pon el <strong>CODIGO</strong> y <strong>CANTIDAD</strong> y listo nosotros te generaremos un link de pago</li>
                    </ul>
                </div>
                <div>
                    <div className='text-center mt-3 mb-4'>
                        <img src='' alt='ejemplo contacto'/>
                    </div> 
                    <p>¿Estas desde una computadora y no sabes abrir whatsapp? <a href=''><strong>Haz Click Aqui y seran solo tres simple pases para contectarte</strong></a></p>
                </div>
            </div>
        </section>
    )
}