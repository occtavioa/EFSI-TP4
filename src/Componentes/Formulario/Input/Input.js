import './Input.css'

function Input({l, t, n, p}) {
    return (
        <>
        <label>{l}</label>
        <input type={t} name={n} className="u-full-width" placeholder={p}></input>
        </>
    )
}

export default Input