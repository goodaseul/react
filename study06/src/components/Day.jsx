import React from "react";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

const Day = () => {
    const { day } = useParams().day;
    const wordList = dummy.words.filter((word) => word.day === day);

    console.log(wordList);
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
                    {dummy.words.map((word) => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;
