import { Hero } from "../components"

export const Search = ({ searchText, searchResults }) => {
    const title = `You are searching for ${searchText}`
    return (
        <>
            <Hero title={title} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        
                       { searchResults && <ul>
                            {
                                searchResults.map(result => {
                                    return <li>{result.name}</li>
                                })
                            }
                            
                        </ul>
}
                       
                    </div>
                </div>
            </div>
        </>
    )
}