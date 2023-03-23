
import useTitle from '@/customHooks/useTitle';
import { useRouter } from 'next/router'

const Search = ({ data, params }) => {
    const router = useRouter();

    console.log(data);

    if (router.isFallback) {
        return <p>Cargando...</p>
    }

    useTitle("Searching")
    return (
        <div>
            {data.coins.map(coin => <div>{coin.name}</div>)}
        </div>
    )
}

export default Search

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${params.id}`)
    const data = await response.json();

    return { props: { data } }
}

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: 'bitcoin' } },
        { params: { id: 'ethereum' } },
    ]
    return {
        paths,
        fallback: true,
    }
}
