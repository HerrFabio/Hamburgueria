import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, setVisible, removeFromCart, removeAllFromCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.totalPrice;
   }, 0);

   const handleRemoveItem = (product) => {
      removeFromCart(product);
   }

   return (
      <div className={styles.divBox} role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeFromCart={handleRemoveItem} />
               ))}
            </ul>
         </div>
         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button onClick={() => removeAllFromCart(null)} /* Adicione a função para remover todos os itens */>Remover todos</button>
         </div>
      </div>
   );
};


