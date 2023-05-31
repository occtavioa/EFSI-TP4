import Cita from "./Cita/Cita"

function ListadoCitas(citas) {
    return <>
        {Array.from(citas).forEach(element => {
            <Cita mascota={element.mascota} dueño={element.dueño} fecha={element.fecha} hora={element.hora} sintomas={element.sintomas} />
        })}
    </>
}

export default ListadoCitas
