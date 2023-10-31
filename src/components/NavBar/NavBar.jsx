import "../NavBar/NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav>
      <h1>Distribuidora RPG</h1>
      <div>
        <button>Home</button>
        <button>Nosotros</button>
        <button>Cerraduras</button>
        <button>Candados</button>
      </div>
      <CartWidget />
    </nav>
  );
}
