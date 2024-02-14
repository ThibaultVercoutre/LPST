import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Newsletter from '../components/Newsletter'
import Previsions from '../components/Previsions'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <Description />
                <Newsletter />
                <Previsions />
            </main>
        </>
    )
}

export default Home