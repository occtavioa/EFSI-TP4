import Cita from './Componentes/Cita/Cita'
import Formulario from './Componentes/Formulario/Formulario'
import Subtitulo from './Componentes/Subtitulo/Subtitulo';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className="one-half column">
            <Subtitulo s="Crear mi cita" />
            <Formulario />
          </div>
          <div className="one-half column">
            <Subtitulo s="administra tus citas"/>
            <Cita mascota="m" dueño="d" fecha={new Date().toISOString()} hora={new Date().toTimeString()} sintomas ="asd" />
            <Cita mascota="m" dueño="d" fecha={new Date().toISOString()} hora={new Date().toTimeString()} sintomas ="asd" />
            <Cita mascota="m" dueño="d" fecha={new Date().toISOString()} hora={new Date().toTimeString()} sintomas ="asd" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
