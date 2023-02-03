import { Hero } from "../components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { API_KEY } from "../Constants/keys"

export const MovieDetail = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    
    useEffect(() => {
        if (id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
            })
        }
    }, [id])
    return (
        <>
            <Hero title="Movie Detail" />
            <div className="container">
                <div className="row">
                   
                </div>
            </div>
        </>
    )
}