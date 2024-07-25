import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
    const { day } = useParams();
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/words")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setWords(data);
            });
    });

    const wordList = words.filter((word) => word.day === Number(day));
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
