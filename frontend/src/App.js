import React, {useState} from 'react'; //para usar controle de estados importar {useState}

//import Header from './Header';

import Routes from './routes';
import './global.css';

function App() {

  return (
    <div> 
      <Routes/>
    </div>
  );


  /*return (
    <Header/>
  );*/

 /* return ( //a propriedade é passada como parametro para a função
    <Header title="teste"/>
  );*/

  /*return ( //3 forma
    <Header>Semana</Header>
  );*/
  
  /*let [counter, setCounter] = useState(0); //conceito de estado

  function increment()
  {
    setCounter(counter++ );
  }

  return ( //não pode deixar as tags soltas, colocar dentro de div
    <div> 
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );*/
}

export default App;
