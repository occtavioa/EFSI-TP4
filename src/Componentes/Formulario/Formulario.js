import './Formulario.css'
import Input from './Input/Input'

function Formulario() {
    return <form>
        <Input l="Nombre Mascota" t="text" n="mascota" p="Nombre Mascota" />
        <Input l="Nombre Dueño" t="text" n="dueño" p="Nombre dueño de la mascota" />
        <Input l="Fecha" t="date" n="fecha" p="" />
        <Input l="hora" t="time" n="hora" p="" />
        <label>Sintomas</label>
        <textarea name='sintomas' className='u-full-width'></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar
            Cita</button>
    </form>
}

export default Formulario
