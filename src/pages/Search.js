import { Hero } from "../components"

export const Search = ({ searchText, searchResults }) => {
    const title = `You are searching for ${searchResults}`
    return (
        <>
            <Hero title={title} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        
                        <ul>
                            {/* {
                                searchResults.map(result => {
                                    <li>{result}</li>
                                })
                            } */}
                            
                        </ul>
                       
                    </div>
                </div>
            </div>
        </>
    )
}