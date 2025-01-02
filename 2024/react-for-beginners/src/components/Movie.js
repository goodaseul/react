import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, medium_cover_image, title, summary, genres }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={medium_cover_image} alt={title} />
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
