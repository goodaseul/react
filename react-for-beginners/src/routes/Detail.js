import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieD, setMovieD] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovieD(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    };
    useEffect(() => {
        // fetch 는 여기 안에 못쓴다 .
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>아직 로딩중...</h1>
            ) : (
                <div>
                    <h1>Detail</h1>
                    <MovieDetail key={movieD.id} title={movieD.title} />
                </div>
            )}
        </div>
    );
}

export default Detail;
