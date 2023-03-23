import CriptoItem from '@/components/CriptoItem/CriptoItem';
import useTitle from '@/customHooks/useTitle';
import { useRouter } from 'next/router'

const Criptos = ({ data }) => {
    const router = useRouter();

    console.log(data);

    if (router.isFallback) {
        return <p>Cargando...</p>
    }

    useTitle(data.name)
    return (
        <CriptoItem data={data} />
    )
}

export default Criptos

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
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
