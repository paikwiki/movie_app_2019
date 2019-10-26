import React from 'react'
import "./Movie.css"

type MovieProp = {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: Array<string>
}

export default function Movie({ id, year, title, summary, poster, genres }: MovieProp): JSX.Element {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    )
}