import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";

export interface IDay {
    id: number;
    day: number;
}

const DayList = () => {
    const days: IDay[] = useFetch("http://localhost:3001/days");
    if (days.length === 0) {
        return <span>Loading...</span>;
    }
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
