import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addToCart, setAddProduct }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id}
               product={product}
               setAddProduct={setAddProduct}
               addToCart={addToCart} />
         ))};
      </ul>
   );
};