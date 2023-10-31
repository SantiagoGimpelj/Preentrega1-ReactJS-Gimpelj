import "../CartWidget/CartWidget.module.css"
import carrito from "./assets/carrito.png"

export default function CartWidget() {
  return (
    <div>
        <img src={carrito} alt="CartWidget" />
        0
    </div>
  )
}
