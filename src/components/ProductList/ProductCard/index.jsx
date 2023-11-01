import styles from "./style.module.scss";


export const ProductCard = ({ product, addToCart }) => {


    return (
        <li className={styles.liBox}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title three">{product.name}</h3>
                <span className="paragraph three">{product.category}</span>
                <span className="paragraph four">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn paragraph five" onClick={() => addToCart(product)} >Adicionar</button>
            </div>
        </li>
    );
};