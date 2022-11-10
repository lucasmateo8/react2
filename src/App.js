
import './App.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import Router from './routes';


function App() {
  return (
   /*  <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"BIENVENIDOS"}/>
    
    </div> */
    <Router />
    
  );
}

export default App;
