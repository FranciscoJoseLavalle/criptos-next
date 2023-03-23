import Link from 'next/link'
import { useEffect, useState } from 'react';
import style from './Header.module.css'

const Header = () => {
    const [search, setSearch] = useState('bitc');
    console.log(search);

    return (
        <header className={style.header}>
            <nav>
                <h1>Crypto<span>currencies</span></h1>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder='Search...' onChange={(e) => {
                                console.log('prueba');
                                setSearch(e.target.value)
                                // search = e.target.value
                            }
                            } />
                            <Link href={`/search/${search}`} style={{
                                backgroundColor: '#eee',
                                color: '#223',
                                padding: ".5rem"
                            }}>Buscar</Link>
                        </form>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header