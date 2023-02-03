import { getFormattedDate } from "../utils/getFormattedDate"

export const MovieCard = ({ movie }) => {
    const { original_title, poster_path, release_date, overview, id  } = movie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const formattedDated = getFormattedDate(release_date)

    return (
        <div className="col-lg-3 col-md-4 col-2 my-4">
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt={original_title} />
                <div className="card-body">
                    <h5 className="card-title">{original_title} - {formattedDated}</h5>
                    <p className="card-text">
                        {overview}
                    </p>
                    <a href={`/movie/${id}`} className="btn btn-primary">
                        See more
                    </a>
                </div>
            </div>
        </div>
    )
}
