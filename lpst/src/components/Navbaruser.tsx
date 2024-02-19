import {useState} from 'react'

interface NavBarProps {
    user: number;
    setIsConnected: (isConnected: boolean) => void;
    setPageUser: (page: number) => void;
}

const Navbar = ({user, setIsConnected, setPageUser}: NavBarProps) => {
    const [active, setActive] = useState([true, false, false, false, false])

    const majActive = (index: number, id: string) => () => {
        const newActive = active.map((_, i) => i === index);
        setActive(newActive)
        setPageUser(index + 1);
        let element = document.getElementById(id);
        scrollTo({
            top: element?.offsetTop || 0,
            left: 0,
            behavior: "smooth",
          });
        console.log(element?.scrollTop || 0);
    }

    return (
        <nav>
            <div>
                <ul>
                    <li className={active[0] ? 'active' : ''} onClick={majActive(0, "header")}>Home</li>
                    <li className={active[1] ? 'active' : ''} onClick={majActive(1, "billeterie")}>Billeterie</li>
                    <li className={active[2] ? 'active' : ''} onClick={majActive(2, "inscription")}>Inscription</li>
                    <li className={active[3] ? 'active' : ''} onClick={majActive(3, "faq")}>FAQ</li>
                    <li className={active[4] ? 'active' : ''} onClick={majActive(4, "administration")}>Administration</li>
                </ul>
                <ul>
                    <li>
                        {user ? <a onClick={() => setIsConnected(false)} href='/'><img src="src/assets/logout.svg" alt="" /></a> : <a href='/login'><img src="src/assets/login.svg" alt="" /></a>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar