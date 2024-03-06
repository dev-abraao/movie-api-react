import './SearchResults.css'
import placeholder from '../assets/placeholder.png'
import { Link } from 'react-router-dom';

function SearchResults({ results }){

    return (
        <div>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <Link to={`/movie-api-react/${result.imdbID}`}>
                        {result.Poster !== "N/A" ? (
                            <img src={result.Poster} alt="" title={result.Title}/>
                        ) :  (
                            <img src={placeholder} alt="" />
                        )}
                       </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults