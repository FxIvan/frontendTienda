import React from 'react'
import logoFacebook from '../imagenes/logoFacebook.svg'
import logoInstagram from '../imagenes/logoInstagram.svg'
import logoLinkedIn from '../imagenes/logoLinkedIn.svg'

export const Contacto = () =>{
    return(
        <div className='contacto-container container'>
            <div>
                <div className='col-12'>
                    <h2>Contacto</h2>
                </div>
                <div className='mt-5 textcontact-container'>
                    <div className='col-12 row m-auto d-flex justify-content-center pd-5'>
                    <div className='col-5'>
                        <h3>Corre Electronico</h3>
                        <p>ivan@devalmendra.com</p>
                        <p>almendraivan210814@gmail.com</p>
                    </div>
                    <div className='col-5'>
                        <h3>Telefonos</h3>
                        <p>1136887781 - whatsapp y llamadas</p>
                        <p>1156566178 - solo llamadas</p>
                    </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='col-8 row m-auto d-flex justify-content-center pt-5'>
                        <h3>Redes</h3>
                    </div>
                    <div className='redessociales-contacto m-auto text-center'>
                        <div className='col-3 d-flex justify-content-around text-center m-auto'>
                        <a  href='https://www.facebook.com' target="_blank"><img src={logoFacebook} alt='redes'/></a>
                        <a href='https://www.instagram.com' target="_blank"><img src={logoInstagram} alt='redes'/></a>
                        <a href='https://www.linkedin.com/in/devalmendra' target="_blank"><img src={logoLinkedIn} alt='redes'/></a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}