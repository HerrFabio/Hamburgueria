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
      <div className={styles.fullscreenBackground} role="dialog">
         <div className={`${styles.headerCard} title2`}>
            <h2>Carrinho de compras</h2>
            <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
               <MdClose size={21} color="grey-opaque"/>
            </button>
         </div>
         <div className={styles.divBox}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeFromCart={handleRemoveItem} />
               ))}
            </ul>
         </div>
         <div className={styles.footerCard}>
            <div className={styles.divBoxTotal}>
               <span className="paragraph six">Total</span>
               <span className="paragraph two">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button className="btn paragraph five" onClick={() => removeAllFromCart(null)}>Remover todos</button>
         </div>
      </div>
   );
};


