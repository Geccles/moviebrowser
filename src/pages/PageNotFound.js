import { Link } from 'react-router-dom'
import { Hero } from '../components'

export const PageNotFound = () => {
    return (
        <>
            <Hero title="Page not found"  />
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 offset-3 my-5'>
                        <h1>Oops! You seem to be lost.</h1>
                        <p>Here are some helpful links:</p>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
