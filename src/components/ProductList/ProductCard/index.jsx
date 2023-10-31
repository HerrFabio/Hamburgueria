import styles from "./style.module.scss";


export const ProductCard = ({ product, addToCart }) => {


    return (
        <li className={styles.libox}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addToCart(product)} >Adicionar</button>
            </div>
        </li>
    );
}


