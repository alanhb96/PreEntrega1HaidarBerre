import Cart from './CartWidget'


const NavBar = () => {

    return(
        <header className="header">
            <h1>VinylVerse</h1>
            <nav className="navBar">
                <ul>
                    <li><a href="#">By Genre</a></li>
                    <li><a href="#">By Artist</a></li>
                    <li><a href="#"><Cart/></a></li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar