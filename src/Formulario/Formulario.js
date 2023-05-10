import './Formulario.css'

function Formulario() {
    return <form>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="mascota"></input>
        <label>Nombre Dueño</label>
        <input type="text" name="dueño" className="u-full-width" placeholder="Nombre Dueño" value="dueño"></input>
        <label>Fecha</label>
        <input type="date" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="fecha"></input>
        <label>Hora</label>
        <input type="time" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="hora"></input>
        <label>Sintomas</label>
        <textarea value="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar
            Cita</button>
    </form>
}

export default Formulario
