import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Newsletter from '../components/Newsletter'
import Previsions from '../components/Previsions'
import Agenda from '../components/Agenda'
import Projets from '../components/Projets'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <Description />
                <Newsletter />
                <Previsions />
                <Agenda />
                <Projets />
            </main>
        </>
    )
}

export default Home