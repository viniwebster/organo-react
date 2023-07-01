import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import Dropdown from "../DropDown";
import "./Formulario.css";

function Formulario(props) {

    function onSave(event) {
        event.preventDefault();
        console.log("Usuario cadastrado: ", nome, cargo, imagem, time);
        props.novoColaborador({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('')
    }
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                required={true} 
                label="Nome" 
                placeholder="Digite o seu nome"
                valor={nome}
                aoAlterar={valor => setNome(valor)}
                />

                <CampoTexto required={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
                />

                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                />
                <Dropdown required={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section> 
    )
}

export default Formulario