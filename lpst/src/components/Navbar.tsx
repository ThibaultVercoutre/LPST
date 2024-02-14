import {useState} from 'react'

const Navbar = () => {
    const [active, setActive] = useState([true, false, false, false, false, false])

    const majActive = (index: number) => () => {
        const newActive = active.map((_, i) => i === index)
        setActive(newActive)
    }

    return (
        <nav>
            <div>
                <ul>
                    <li className={active[0] ? 'active' : ''} onClick={majActive(0)}>Home</li>
                    <li className={active[1] ? 'active' : ''} onClick={majActive(1)}>L'Association</li>
                    <li className={active[2] ? 'active' : ''} onClick={majActive(2)}>Newsletter</li>
                    <li className={active[3] ? 'active' : ''} onClick={majActive(3)}>Jardin</li>
                    <li className={active[4] ? 'active' : ''} onClick={majActive(4)}>Agenda</li>
                    <li className={active[5] ? 'active' : ''} onClick={majActive(5)}>Projet</li>
                </ul>
                <ul>
                    <li>
                        <img src="src/assets/login.svg" alt="" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar