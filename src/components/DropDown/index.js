import "./Dropdown.css";

function Dropdown(props) {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.req} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown