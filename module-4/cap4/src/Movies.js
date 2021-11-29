import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/ac/20121003093557%21No_image_available.svg/120px-No_image_available.svg.png'

const Movies = () => {
    const { movies, isLoading } = useGlobalContext()

    if (isLoading) {
        return <div className='loading'></div>
    }
    return (
        <section className='movies'>
            {movies.map((movie) => {
                const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

                return (
                    <Link to={`/movies/${id}`} key={id} className='movie'>
                        <article>
                            <img src={poster === 'N/A' ? url : poster} alt={title} />
                            <div className='movie-info'>
                                <h4 className='title'>{title}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies
