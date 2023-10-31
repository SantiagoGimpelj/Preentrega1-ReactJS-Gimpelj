import "../CartWidget/CartWidget.module.css"
import carrito from "./assets/carrito.png"

export default function CartWidget() {
  const itemCount = 3;
  return (
    <div>
        <img src={carrito} alt="CartWidget" />
        <span>{itemCount}</span>
    </div>
  )
}
