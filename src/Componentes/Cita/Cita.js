import './Cita.css';

function Cita(props) {
  return (
    <div className='cita'>
        <p>Mascota: <span>{props.mascota}</span></p>
        <p>Dueño: <span>{props.dueño}</span></p>
        <p>Fecha: <span>{props.fecha.split('T')[0]}</span></p>
        <p>Hora: <span>{props.hora.slice(0,5)}</span></p>
        <p>Sintomas: <span>{props.sintomas}</span></p>
        <button className="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default Cita;