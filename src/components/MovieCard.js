import { Link } from 'react-router-dom'
import { getFormattedDate } from '../utils/getFormattedDate'

export const MovieCard = ({ movie }) => {
    const { original_title, poster_path, release_date, id } = movie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const formattedDated = getFormattedDate(release_date)
    const movieDetailUrl = `/movie/${id}`
    const defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADY0lEQVR4nO3cvWoUURjG8b8as2ChYCFI1NbaC/AGLDRIlljY25i03oKXoL1FSGOXGxCMaVRIsXaioiBaKNFGoyNHRgzL7s7Mzsd59szzwAshWSaT/fGec/ZkZsBxHMdxmssQ+Ay8B1YbPK4zR44Bn4Asr5/A+jwHcprLxyMgRhHIzbwzjCKUtQkoh8Dt2CfW5xhFMEYRjFEEYxTBGCVSwopqBJwvieKi1ntQCsQo6IEYBT0Qo6AHMiue6KunVZAQo4iBhBhFDCTEKGIgIUYRAwkxihhIiFHEQEKMIgYSYhQxkBCjiIGEGEUMJMQoYiDkF92pXmI0ADaBZ8C3vMLXG/nPkgRRRVkBXs7YkX2RvyZJEDWUQQHGUZRBqiBKKJslMP7V3ZRBVFD2KoDspg6isPo6qAASXps8SGyUgwogX/sCEnP42vOQpYWy4Un9/91apwVQBvmStsyydznVIes48ADYB84JoKwUoCT9wfAksHXk+Cooy/nnjN18og/1NP9eE50hCXIK2JnwO6pcS3y44HdyyYCcAZ7MGBZGPUGRAAlD0vMSE+eoByjRQS4BryosLUeJo0QFuQy8qYCR9QAlGsiVCQ8hMApxQK4CX2pgZAl3Sucg14DvDWBkiaJ0CnIL+NEgRtbhh8fw5KN3ea2mAHIH+NUCRtZBpwzHjtFmp3UCcg/43SJG1iLKOEbbKK2ChB3b+x1AZC2hTMNoE6U1kLBj+7BjjKxBlCKMtlBaAVke27FdNJRhxQcgNInSOMi0HdtFQRnO+TSKplAaBSnasY1R+xWXxHUeDdLE/2MaAym7Y6veKVnNqtspjYBU3bGN1SlnS3ZK3arTKbVB5t2x7bq2gaUpf5NSp9QGqbNj21VtzcBQ65TaIIuIsSQ8fCUNsj0B4wTwSHiiTxbk8ZTOmPcSo646JVmQCwUYqii9AFkq2MpRQkkWZCdHuZgPX0WvV0FJFiSboxQmeoOghWIQtDrFIGgNXwZBa04xCFqrL4NQ/EbFfNZ9YbKe1igSikHQQjEIWp1iELSGL4OgNacYBC0Ug6CFYhC0UAyCFopB0EIxCFooTotZ1BtRk86aUfRiFMEYRTBGEYxRBDPt9robsU+sz1mfgPI29kn1PetjKB9in5DD32Hqdd4d1/2GOI7jODSUP5x/vxUZ+z5/AAAAAElFTkSuQmCC"
    const imageURL = poster_path ? imgUrl : defaultImg
    const customStyle = !poster_path ? { width: 100, alignSelf: "center", marginTop: "50%" } : null

    return (
        <div className="col-lg-3 col-md-4 col-2 my-4">
            <div className="card h-100">
                <img
                    src={imageURL}
                    className="card-img-top"
                    alt={original_title}
                    style={customStyle}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {original_title} - {formattedDated}
                    </h5>
                    <Link to={movieDetailUrl} className="btn btn-primary">
                        See more
                    </Link>
                </div>
            </div>
        </div>
    )
}
