import Navbar from '../components/LandingPage/Navbar'
import Footer from '../components/LandingPage/Footer'
import { Outlet } from 'react-router-dom'


const HomeLayout = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout