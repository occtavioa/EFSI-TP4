import Cita from "./Cita/Cita"



function ListadoCitas({citas, setCitas}) {
    let arr = [];
    citas.forEach(element => {
        arr.push(<Cita mascota={element.mascota} dueño={element.dueño} fecha={element.fecha} hora={element.hora} sintomas={element.sintomas} citas={citas} setCitas={setCitas}/>);
    })
    console.log(citas);
    return <>
        {arr}
    </>
}

export default ListadoCitas
