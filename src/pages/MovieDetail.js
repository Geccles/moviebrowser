import { Hero } from '../components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_KEY } from '../Constants/keys'

export const MovieDetail = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`

    useEffect(() => {
        if (id) {
            fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
            )
                .then((response) => response.json())
                .then((data) => {
                    setMovieDetails(data)
                    setIsLoading(false)
                })
        }
    }, [id])
    return (
        <>
            <Hero
                title={
                    isLoading || !movieDetails
                        ? 'Loading....'
                        : movieDetails.original_title
                }
                backdropUrl={backdropUrl}
            />
            {!isLoading && !!movieDetails && (
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            {posterPath && (
                                <img
                                    src={posterPath}
                                    className="img-fluid rounded shadow"
                                    alt="movie poster"
                                />
                            )}
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">{movieDetails.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
