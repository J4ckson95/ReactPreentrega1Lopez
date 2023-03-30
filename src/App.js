import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContiner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}></ItemListContainer>
    </div>
  );
}

export default App;
