import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button,} from "react-bootstrap";
import Frase from './components/Frase';
import "./style.css";
import {useEffect,useState} from "react";
import Spinner from './components/Spinner';


function App() {
  const [personaje, setpersonaje] = useState({});
  const [mostrarSpinner , setMostrarSpinner]=useState(true)


  useEffect(()=>{
    consultarAPI();
  },[])

  
  const consultarAPI=async()=>{
    try {
      // mostrar el spinner
      setMostrarSpinner(true)
  const respuesta =await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  console.log(respuesta);
  const dato= await respuesta.json();
  console.log(dato[0]);
  setpersonaje(dato[0]);
  // mostrar el componente frase
  setMostrarSpinner(false)
} catch (error) {
  console.log(error);
}

  }

  // condicion logica if,operardor ternario?:
  // (condicion logica)?(logica a ejecutar si cumplo la condicion logica):(logica a ejecutar si no cumplo la condicion logica)
  const mostrarComponente=(mostrarSpinner===true)?( <Spinner></Spinner>):( <Frase personaje={personaje}></Frase>)

  return (
  <Container className='py-5'>
    <article className='row text-center pb-5'>
    <div className='col-12'>
      <img className='w-75' src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/previews/632cd858ffabe0042d12bb36/download/image.png" alt="" />
    </div>
    <div className='col-12'>
    <Button variant="warning" onClick={consultarAPI}>Obtener Frase</Button>
    </div>
    </article>
   {
    mostrarComponente
   }
  
  </Container>  
  );
}

export default App;
