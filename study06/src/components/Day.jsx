import React from "react";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
    const { day } = useParams();
    const wordList = dummy.words.filter((word) => word.day === Number(day));
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <thead>
                    <tr>
                        <th>단어</th>
                        <th>뜻</th>
                    </tr>
                </thead>
                <tbody>
                    {wordList.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;
