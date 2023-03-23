import { useEffect } from "react"


const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Criptos`
    }, [])
}

export default useTitle