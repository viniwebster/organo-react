import "./Card.css"

function Card(props) {
    return(
        <div className="card">
            <div className="cabecalho">
                <img src={props.imagem} alt={props.imagem}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h4>{props.cargo}</h4>
            </div>
        </div>
    )
}

export default Card