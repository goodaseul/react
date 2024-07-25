import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DayList = () => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDays(data);
            });
    }, []);

    return (
        <>
            <ul className="list_day">
                {days.map((day) => {
                    return (
                        <li key={day.id}>
                            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default DayList;
