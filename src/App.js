
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
//import Contacto from "./components/pages/Contacto";
//import Inicio from "./components/pages/Inicio";
//import Nosotros from "./components/pages/Nosotros";
//import Tienda from "./components/pages/Tienda";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= "HOLA CODERS" />

    </div>
  );
}

export default App;
