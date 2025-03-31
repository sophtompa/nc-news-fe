import { Link } from "react-router"

function Nav() {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
        </nav>
    )
}

export default Nav;