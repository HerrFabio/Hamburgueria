import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setVisible, cartList, productList, setCartList, value, setValue }) => {

   const [searchValue, setSearchValue] = useState("");

   const searchAndAddToCart = () => {

      const matchingProducts = productList.filter((product) =>
         product.name.toLowerCase().includes(value.toLowerCase())
      );

      matchingProducts.forEach((product) => {
         const existingItemIndex = cartList.findIndex((item) => item.id === product.id);

         if (existingItemIndex !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingItemIndex].quantity += 1;
            updatedCartList[existingItemIndex].totalPrice =
               updatedCartList[existingItemIndex].price * updatedCartList[existingItemIndex].quantity;
            setCartList(updatedCartList);
         } else {

            setCartList([...cartList, { ...product, quantity: 1, totalPrice: product.price }]);
         }
      });

      setValue("");
   };

   const handleFormSubmit = (e) => {
      e.preventDefault(); 

      searchAndAddToCart();

      setVisible(true);
   };

   const totalCartCount = cartList.reduce((total, product) => total + product.quantity, 0);

   return (
      <header className={styles.headerBox}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart size={21} />
               <span>{totalCartCount}</span>
            </button>
            <form onSubmit={handleFormSubmit}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="button" onClick={searchAndAddToCart}>
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};


// import { useState } from "react";
// import Logo from "../../assets/Logo.svg";
// import { MdSearch, MdShoppingCart } from "react-icons/md";

// export const Header = ({ setVisible, cartList }) => {
//    const [value, setValue] = useState("");

//    // Calcular o número total de itens no carrinho, incluindo itens repetidos
//    const totalCartCount = cartList.reduce((total, product) => total + product.quantity, 0);

//    return (
//       <header>
//          <img src={Logo} alt="Logo Kenzie Burguer" />
//          <div>
//             <button onClick={() => setVisible(true)}>
//                <MdShoppingCart size={21} />
//                <span>{totalCartCount}</span>
//             </button>
//             <form>
//                <input
//                   type="text"
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                />
//                <button type="submit">
//                   <MdSearch size={21} />
//                </button>
//             </form>
//          </div>
//       </header>
//    );
// };
