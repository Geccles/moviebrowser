import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ({ searchText, setSearchText }) => {
    const navigate = useNavigate()
    const updateSearchValue = (e) => {
        navigate('/search')
        setSearchText(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Movie Browser
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="gosomewhere"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="gosomewhere"
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="gosomewhere"
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="gosomewhere"
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchText}
                            onChange={updateSearchValue}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
