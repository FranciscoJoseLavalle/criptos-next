import Cripto from "../Cripto/Cripto"
import styles from './CriptosContainer.module.css';

const CriptosContainer = ({ criptos }) => {
    console.log(styles);
    return (
        <main className={styles.main}>
            <table className={styles.cripto_list}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cryptocurrency</th>
                        <th>Price (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {criptos.map(cripto =>
                        <Cripto cripto={cripto} key={cripto.id} />
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CriptosContainer