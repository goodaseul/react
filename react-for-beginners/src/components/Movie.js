import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, summary, genres }) {
    return (
        <div>
            <h2> {title}</h2>
            <img src={medium_cover_image} alt={title} />
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p> {summary}</p>
        </div>
    );
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
