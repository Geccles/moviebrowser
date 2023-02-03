import { Hero, MovieCard } from '../components'

export const Search = ({ searchText, searchResults }) => {
    const title = `You are searching for ${searchText}`

    const getMovieResults =
        searchResults.map((result, i) => {
        return <MovieCard movie={result} key={i} />
    })
    return (
        <>
            <Hero title={title} />
           {
                searchResults && 
                <div className="container">
                    <div className="row">
                        {getMovieResults}
                    </div>
                </div>
           } 
        </>
    )
}
