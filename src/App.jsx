import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from "react-bootstrap";
import Frase from './components/Frase';
import "./style.css";
import {useEffect,useState} from "react";

function App() {
  const [personaje, setpersonaje] = useState({});


  useEffect(()=>{
    consultarAPI();
  },[])

  
  const consultarAPI=async()=>{
    try {
  const respuesta =await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  console.log(respuesta);
  const dato= await respuesta.json();
  console.log(dato[0]);
  setpersonaje(dato[0]);
  
} catch (error) {
  console.log(error);
}

  }

  return (
  <Container className='py-5'>
    <article className='row text-center pb-5'>
    <div className='col-12'>
      <img className='w-75' src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/previews/632cd858ffabe0042d12bb36/download/image.png" alt="" />
    </div>
    <div className='col-12'>
    <Button variant="warning">Obtener Frase</Button>
    </div>
    </article>
    <Frase personaje={personaje}></Frase>
  </Container>  
  );
}

export default App;
