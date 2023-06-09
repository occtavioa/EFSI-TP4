import ListadoCitas from './Componentes/ListadoCitas/ListadoCitas';
import Formulario from './Componentes/Formulario/Formulario'
import Subtitulo from './Componentes/Subtitulo/Subtitulo';
import './App.css'
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);
  // console.log(citas);
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className="one-half column">
            <Subtitulo s="Crear mi cita" />
            <Formulario setCitas={setCitas} citas={citas}/>
          </div>
          <div className="one-half column">
            <Subtitulo s="administra tus citas"/>
            <ListadoCitas citas={citas} setCitas={setCitas}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
