import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Frase from './components/Frase';
import Titulo from "./components/Titulo";
import "./style.css";

function App() {
  return (
  <Container>
    <Titulo></Titulo>
    <Frase></Frase>
  </Container>  
  
  );
}

export default App;
