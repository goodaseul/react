import { useParams } from "react-router-dom";

const Detail = (props) => {
    let { id } = useParams();
    let findItem = props.shoes.find((item) => {
        return (item.id = id);
    });
    return (
        <div className="detail">
            <div className="wrap">
                <div className="wrap_img">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} />
                </div>
                <div className="wrap_info">
                    <h2>{findItem.title}</h2>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn">주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
