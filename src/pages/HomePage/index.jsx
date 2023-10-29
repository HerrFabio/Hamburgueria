import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../productsApi";

export const HomePage = () => {



   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isVisible, setVisible] = useState(false);
   const [value, setValue] = useState("");
   
   // useEffect montagem - carrega os produtos da API e joga em productList[Feito]
   
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   
   
   
   // adição, exclusão, e exclusão geral do carrinho
   
   
   
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva
   
   // const addToCart = (itemProduct) => {
   //    setCartList([...cartList, itemProduct]);
   //    setVisible(true);
   // }

   const addToCart = (itemProduct) => {
      const existingItemIndex = cartList.findIndex((item) => item.id === itemProduct.id);
   
      if (existingItemIndex !== -1) {
         // O item já existe no carrinho, então atualize a quantidade e o preço total
         const updatedCartList = [...cartList];
         updatedCartList[existingItemIndex].quantity += 1;
         updatedCartList[existingItemIndex].totalPrice = updatedCartList[existingItemIndex].price * updatedCartList[existingItemIndex].quantity;
         setCartList(updatedCartList);
      } else {
         // O item não existe no carrinho, então adicione-o com quantidade e preço total
         setCartList([...cartList, { ...itemProduct, quantity: 1, totalPrice: itemProduct.price }]);
      }
   
      setVisible(true); // Abre o carrinho quando um item é adicionado
   };
   

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await productsApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error);
         };
      };
      getProducts();
   }, []);


   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} productList={productList} setCartList={setCartList} value={value} setValue={setValue} />

         <main>
            <ProductList
               productList={productList}
               addToCart={addToCart}
               />
               
            {isVisible ?
               <CartModal
                  cartList={cartList}
                  setVisible={setVisible}
                  /> : null}

         </main>

      </>
   );
};
