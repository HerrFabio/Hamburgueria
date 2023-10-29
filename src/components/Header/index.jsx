import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setVisible, cartList }) => {
   const [value, setValue] = useState("");

   // Calcular o número total de itens no carrinho, incluindo itens repetidos
   const totalCartCount = cartList.reduce((total, product) => total + product.quantity, 0);

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart size={21} />
               <span>{totalCartCount}</span>
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
