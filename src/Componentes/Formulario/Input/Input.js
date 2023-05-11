import './Input.css'

function Input(props) {
    return (
        <>
        <label>{props.l}</label>
        <input type={props.t} name={props.n} className="u-full-width" placeholder={props.p}></input>
        </>
    )
}

export default Input