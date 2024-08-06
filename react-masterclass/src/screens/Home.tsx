import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";
const Home = () => {
    // errorElement보기위한 일부러 충동냄
    // const users: any = [];
    const [readSearchParams, setSearchParams] = useSearchParams();

    setTimeout(() => {
        setSearchParams({
            day: "today",
            tomorrow: "123",
        });
    }, 3000);

    return (
        <div>
            {/* errorElement보기위한 일부러 충동냄 
             <h1>{users[0].name}</h1> */}
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
