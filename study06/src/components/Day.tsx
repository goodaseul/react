import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import Word, { IWord } from "./Word.tsx";

const Day = () => {
    const { day } = useParams<{ day: string }>();
    const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

    // const wordList = words.filter((word) => word.day === Number(day));
    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;
