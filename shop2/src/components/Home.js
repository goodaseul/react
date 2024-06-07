import List from "./List";
const Home = (props) => {
    return (
        <>
            {/* src 는 빌드업 후 변형이 되기 때문에 import 해서 변수로 사용해줘야함 */}
            <div className="main_bg" style={{ backgroundImage: `url(${props.bg})` }}></div>
            <div className="proudct_list">
                <List shoes={props.shoes} />
            </div>
        </>
    );
};

export default Home;
