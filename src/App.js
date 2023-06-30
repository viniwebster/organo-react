import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App(props) {

  const [colaboradores, setColaboradores] = useState("");

  function cadastraNovoColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }


  return (
    <div className="App">
      <Banner />
      <Formulario novoColaborador={colaborador => cadastraNovoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
