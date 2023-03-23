import Link from 'next/link';
import styles from './Cripto.module.css';

const Cripto = ({ cripto }) => {
    return (
        <tr className={styles.cripto}>
            <td>
                {cripto.market_cap_rank}
            </td>
            <td className={styles.cripto__cripto_field}>
                <Link href={`/criptos/${cripto.id}`}>
                    <img src={cripto.image} alt={`Imagen de ${cripto.name}`} />{cripto.name} <small>({cripto.symbol.toUpperCase()})</small>
                </Link>
            </td>
            <td>
                ${cripto.current_price.toLocaleString()}
            </td>
        </tr>
    )
}

export default Cripto