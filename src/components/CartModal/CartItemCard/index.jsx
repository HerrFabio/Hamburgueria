import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Quantidade: {product.quantity}</p>
            <p>Preço: {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
         </div>
         <button
            onClick={() => removeFromCart(product)} // Adicione a função para remover o item
            aria-label="delete"
            title="Remover item"
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
