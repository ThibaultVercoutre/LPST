import {useState} from 'react'

interface NavbarconnectProps {
    setPage: (page: number) => void;
}

const Navbarconnect = ({setPage}: NavbarconnectProps) => {
    const [active, setActive] = useState([true, false])

    const majActive = (index: number) => () => {
        const newActive = active.map((_, i) => i === index);
        
        setPage(index);
        setActive(newActive)
    }

    return (
        <div className='nav_connect'>
            <div>
                <ul>
                    <li className={active[0] ? 'active' : ''} onClick={majActive(0)}><img src="src/assets/home.svg" alt="" /></li>
                    <li className={active[1] ? 'active' : ''} onClick={majActive(1)}><img src="src/assets/person.svg" alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbarconnect