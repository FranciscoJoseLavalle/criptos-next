import style from './CriptoItem.module.css'
import Image from 'next/image';

const CriptoItem = ({ data }) => {
    return (
        <main>
            <div className={style.cripto}>
                <div className={style.cripto_info}>
                    <Image src={data.image.large} width={100} height={100} alt={`${data.name} image`}></Image>
                    <div>
                        <h2>{data.name}</h2>
                        <small>Ranking: {data.market_cap_rank}</small>
                    </div>
                </div>
                <p>{data.description.en}</p>
            </div>
        </main>
    )
}

export default CriptoItem