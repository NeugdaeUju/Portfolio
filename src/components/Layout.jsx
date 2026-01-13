import Header from "./Header";
import Footer from "./Footer";
import '../assets/sass/layout.scss'

function Layout({children}) {
    return (
        <div className='layout'>
            <Header/>
            <main className='container'>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout