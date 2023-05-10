import './App.css';
import './Cita/Cita'
import './Formulario/Formulario'
import Cita from './Cita/Cita';
import Formulario from './Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE CUENTAS</h1>
      <div className='container'>
        <div className='row'>
          <div className="one-half column">
            <h2>CREAR MI CITA</h2>
            <Formulario></Formulario>
          </div>
          <div className="one-half column">
            <h2>ADMINISTRAR MIS CUENTAS</h2>
            <Cita mascota={"m"} dueño={"d"} fecha={"asd"} hora={"asd"} sintomas ={"asd"}></Cita>
            <Cita mascota={"m"} dueño={"d"} fecha={"asd"} hora={"asd"} sintomas ={"asd"}></Cita>
            <Cita mascota={"m"} dueño={"d"} fecha={"asd"} hora={"asd"} sintomas ={"asd"}></Cita>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
