import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Newsletter from '../components/Newsletter'
import Previsions from '../components/Previsions'
import Agenda from '../components/Agenda'

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
            </main>
        </>
    )
}

export default Home