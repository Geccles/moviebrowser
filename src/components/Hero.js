export const Hero = ({ title, backdropUrl }) => {
    return (
        <header className="bg-dark text-white p-5 hero-container">
            <h1 className="hero-text">{title}</h1>
            {backdropUrl && (
                <div
                    className="hero-backdrop"
                    style={{ backgroundImage: `url(${backdropUrl})` }}
                ></div>
            )}
        </header>
    )
}
