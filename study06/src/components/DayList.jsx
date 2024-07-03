import { Link } from "react-router-dom";

import dummy from "../db/data.json";

const DayList = () => {
    return (
        <ul className="list_day">
            {dummy.days.map((day) => {
                return (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                );
                console.log(day.day);
            })}
        </ul>
    );
};

export default DayList;
