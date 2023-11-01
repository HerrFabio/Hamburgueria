import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../productsApi";
import styles from "./style.module.scss";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isVisible, setVisible] = useState(false);
   const [value, setValue] = useState("");

   const addToCart = (itemProduct) => {
      const existingItemIndex = cartList.findIndex((item) => item.id === itemProduct.id);

      if (existingItemIndex !== -1) {

         const updatedCartList = [...cartList];
         updatedCartList[existingItemIndex].quantity += 1;
         updatedCartList[existingItemIndex].totalPrice = updatedCartList[existingItemIndex].price * updatedCartList[existingItemIndex].quantity;
         setCartList(updatedCartList);
      } else {

         setCartList([...cartList, { ...itemProduct, quantity: 1, totalPrice: itemProduct.price }]);
      }

      localStorage.setItem("cart", JSON.stringify(cartList));

   };


   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await productsApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error);
         }
      };
      getProducts();
   }, []);

   useEffect(() => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
         setCartList(JSON.parse(storedCart));
      }
   }, []);

   const removeFromCart = (product) => {
      const existingItemIndex = cartList.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
         const updatedCartList = [...cartList];

         if (updatedCartList[existingItemIndex].quantity > 1) {
            updatedCartList[existingItemIndex].quantity -= 1;
            updatedCartList[existingItemIndex].totalPrice = updatedCartList[existingItemIndex].price * updatedCartList[existingItemIndex].quantity;
         } else {

            updatedCartList.splice(existingItemIndex, 1);
         }

         setCartList(updatedCartList);


         localStorage.setItem("cart", JSON.stringify(updatedCartList));
      }
   };

   const removeAllFromCart = () => {

      setCartList([]);
      localStorage.removeItem("cart");
   };

   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} productList={productList} setCartList={setCartList} value={value} setValue={setValue} />

         <main className={styles.mainBox}>
            <ProductList
               productList={productList}
               addToCart={addToCart}
            />

            {isVisible ?
               <CartModal
                  cartList={cartList}
                  setVisible={setVisible}
                  removeFromCart={removeFromCart}
                  removeAllFromCart={removeAllFromCart}
               /> : null}

         </main>
      </>
   );
};


