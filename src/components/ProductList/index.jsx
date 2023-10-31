import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addToCart, setAddProduct }) => {
   return (
      <ul className={styles.ulBox}>
         {productList.map((product) => (
            <ProductCard key={product.id}
               product={product}
               setAddProduct={setAddProduct}
               addToCart={addToCart} />
         ))};
      </ul>
   );
};