import {MovieCard} from "./MovieCard";
interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}
interface MoviesService{
    movies: MovieProps[];
}
export function Content({movies}: MoviesService) {
    return(
    <main>
        <div className="movies-list">
            {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
        </div>
    </main>
    )
}
