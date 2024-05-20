function List(props) {
    console.log(props);
    return (
        <>
            {props.shoes.map((item, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} width="80%" /> */}
                        <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" />
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                        <p>{item.price}</p>
                    </div>
                );
            })}
        </>
    );
}

export default List;
