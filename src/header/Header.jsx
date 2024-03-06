import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        
        <header className="head">
            <Link to='/movie-api-react/'><h1><span>Movies</span>Database</h1></Link>
        </header>
    )
}

export default Header