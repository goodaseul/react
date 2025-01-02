import { Link } from "react-router-dom";

const List = (props) => {
    return (
        <>
            {props.shoes.map((shoe, index) => {
                return (
                    <div className="list" key={index}>
                        <Link to={`/detail/${index}`}>
                            {/* 
                            public img 는 빌드업 후 변형되지 않지만, .com/sub/ 에 발행할 경우 링크 문제가 있을 수 있음 하단처럼 표기 
                            img src={process.env.PUBLIC_URL + "/img/bg.png"} /> 
                        */}
                            <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} />
                            <h4>${shoe.title}</h4>
                            <p>${shoe.price}</p>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default List;
