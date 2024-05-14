import bg from "../img/bg.png";
import List from "./List";

function Home(props) {
    return (
        <>
            <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container">
                <div className="row">
                    <List shoes={props.shoes} />
                </div>
            </div>
        </>
    );
}

export default Home;
