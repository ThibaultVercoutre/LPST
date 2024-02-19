import { useState, useEffect } from "react"

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Newsletter from '../components/Newsletter'
import Previsions from '../components/Previsions'
import Agenda from '../components/Agenda'
import Projets from '../components/Projets'
import Navbarconnect from '../components/Navbarconnect'
import Navbaruser from '../components/Navbaruser'
import Billeterie from '../components/Billeterie'
import Inscription from "../components/Inscription"
import FAQ from "../components/FAQ"
import Administration from "../components/Administration"

const Home = () => {
    
    const [isConnected, setIsConnected] = useState(false);
    const [page, setPage] = useState<number>(0);
    const [pageUser, setPageUser] = useState<number>(2);

    const components: {[key: number]: JSX.Element} = {
        1 : <Header />,
        2: <Billeterie />,
        3: <Inscription />,
        4: <FAQ />,
        5: <Administration />,
    };

    const [user, setUser] = useState<number>(() => {
        if (window.localStorage) {
        const user = window.localStorage.getItem("user");
        setIsConnected(user ? true : false);
        return user ? JSON.parse(user) : null;
        }
        return null;
    });

    useEffect(() => {
        if (isConnected) {
            setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null);
        }else {
            localStorage.clear();
        }
    }, [isConnected]);

    return (
        <>
            {page == 0 ? <Navbar user = {user} setIsConnected={setIsConnected}/> : <Navbaruser setPageUser={setPageUser} user = {user} setIsConnected={setIsConnected}/> }
            {isConnected ? <Navbarconnect setPage={setPage}/> : null}
            <main>
                { page == 0 ? <Header /> : null }
                { page == 0 ? <Description /> : null }
                { page == 0 ? <Newsletter /> : null }
                { page == 0 ? <Previsions /> : null }
                { page == 0 ? <Agenda /> : null }
                { page == 0 ? <Projets /> : null }
                { page == 1 ? components[pageUser] : null}
            </main>
        </>
    )
}

export default Home