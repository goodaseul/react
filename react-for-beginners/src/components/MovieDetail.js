import PropTypes from "prop-types";

function MovieDetail({ title }) {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
};

export default MovieDetail;
