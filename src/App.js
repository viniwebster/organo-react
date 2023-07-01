import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: '#57c298',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:"BackEnd",
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffee0f'
    },
    {
      nome: "Front-End",
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: "Data Science",
      corPrimaria: '#a6d167',
      corSecundaria: '#f0f8e2'
    },
    {
      nome:"UX e Design",
      corPrimaria: '#db6e8f',
      corSecundaria: '#fae9f5'
    },
    {
      nome:"Mobile",
      corPrimaria: '#ffba05',
      corSecundaria: '#fff509'
    },
    {
      nome:"Devops",
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  function cadastraNovoColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} novoColaborador={colaborador => cadastraNovoColaborador(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome}
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      cards={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape nome="Vinicius" />
    
    </div>
  );
}

export default App;
