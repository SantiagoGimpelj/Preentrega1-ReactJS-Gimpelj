import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"}/>
      </header>
    </>
  );
}

export default App;
