import PropTypes from "prop-types";

function Movie(id, year, title, summary, poster){
    return <h4> {title} </h4>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;