export const MovieCard = ({ movie }) => {
    const { name } = movie
    return (
        <div className="card" style={{ width: '18rem', marginBottom: 8 }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a href="/go-some-where" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    )
}
