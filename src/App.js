
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"BIENVENIDOS"}/>
    </div>
  );
}

export default App;
