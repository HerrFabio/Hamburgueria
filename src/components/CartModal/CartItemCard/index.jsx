import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li>
         <div className={styles.divImgBox}>
            <img src={product.img} alt={product.name} />
            <div className={styles.divInfoBox}>
               <h3 className="title three">{product.name}</h3>
               <p className="paragraph four">Quantidade: {product.quantity}</p>
               <p className="paragraph four">Preço: {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
            </div>
         </div>
         <button
            onClick={() => removeFromCart(product)} // Chame a função para remover o item
            aria-label="delete"
            title="Remover item"
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
