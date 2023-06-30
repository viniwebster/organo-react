import "./CampoTexto.css"

function CampoTexto(props) {

    function aoDigitado(event) {
        props.aoAlterar(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto