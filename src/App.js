import React from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import { PeticionesContext } from './component/Context/PeticionContext';
import { Footer } from './component/footer/footer';
import { Form } from './component/formulario/form';
import { Header } from './component/nav/navbar';
import { Panel } from './component/panelForm/panel'
import { Contacto } from './component/contacto/contacto';
import { Principal } from './component/principal/principal';
import { Productos } from './component/productos/productos';
import { ToUpdate } from './component/toUpdate/toUpdate'
import { VerMas } from './component/verMas/verMas';

function App() {

  return (
        <PeticionesContext>
          <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' element={<Principal/>}/>
                <Route path='/cargarproducto' element={<Form/>}/>
                <Route path='/cargarproducto/panelform' element={<Panel/>}/>
                <Route path='/toupdate/:id' element={<ToUpdate/>}/>
                <Route path='/vermas/:id' element={<VerMas/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/contacto' element={ <Contacto/> }/>
              </Routes>
              <Footer/>
          </BrowserRouter>
        </PeticionesContext>
  );
}

export default App;
