import logo from './logo.svg';
import './App.css';
import Ejemplo from './hooks/ejemplo';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteconContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';

//import ComponenteA from './components/container/componenteA';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/GreetingF';
//import TaskListComponent from './components/container/task_list';


function App() {
  /* const contactoPrueba = {
    nombre: 'juan pablo',
    apellido: 'Montoya',
    email: 'juanrona12@gmail.com',
    conectado: false,
  }; */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* //? componente propio Greeting.jsx */}
        {/* <Greeting name = "juan Pablo"></Greeting> */}
        {/* <GreetingF name="Juan Pablo"></GreetingF> */}
        {/* //?Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* //? Componentes de ejercicio 1,2,3 */}
        {/* <ComponenteA contacto={contactoPrueba}/> */}
        {/* //? Ejemplos de uso de hooks */}
        {/* <Ejemplo/>
        <Ejemplo2/> */}
        <MiComponenteconContexto />
        <Ejemplo4 nombre='Martin'>
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
