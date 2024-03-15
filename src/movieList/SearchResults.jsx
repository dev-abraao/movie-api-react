import './SearchResults.css'
import placeholder from '../assets/placeholder.png'
import { Link } from 'react-router-dom';

function SearchResults({ results }){

    return (
            <ul id='movie-list'>
                {results.map((result, index) => (
                    <li key={index}>
                        <Link to={`/movie-api-react/${result.imdbID}`}>
                        {result.Poster !== "N/A" ? (
                            <img className='img-found' src={result.Poster} alt="" title={result.Title}/>
                        ) :  (
                            <img className='img-found' src={placeholder} alt="" />
                        )}
                       </Link>
                    </li>
                ))}
            </ul>
    )
}

export default SearchResults