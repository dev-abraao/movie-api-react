import { useEffect, useState } from 'react'
import './SearchHero.css'
import SearchResults from '../movieList/SearchResults'

function SearchHero(){
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            if (searchTerm){
                const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=7fdec854`)
                const data = await response.json();
                console.log(data)
                setSearchResults(data.Search || []);
            }
        }
        fetchData();
    },[searchTerm]) 

    function handleSearch(event){
        event.preventDefault();
        setSearchTerm(event.target.search.value)
    }


    return(
    <>
        <main>
            <form onSubmit={handleSearch}> 
                <input type="text" name="searchBar" id="search" placeholder='🔎 Search a Movie/Show Title'/>
                <input type="submit" value="Search" className='searchBtn'/>
            </form>
            <SearchResults results={searchResults}/>
        </main>    
    </>
    )
}
export default SearchHero