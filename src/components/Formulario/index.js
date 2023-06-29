import CampoTexto from "../CampoTexto";
import Dropdown from "../DropDown";
import "./Formulario.css";

function Formulario() {

    const times = [
        "Programação",
        "BackEnd",
        "Front-End",
        "Data Science",
        "UX e Design",
        "Mobile",
        "Devops"
    ]

    return (
        <section className="formulario">
            <form>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown label="Time" itens={times}/>
            </form>
        </section> 
    )
}

export default Formulario