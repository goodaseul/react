import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    // const wordList = words.filter((word) => word.day === Number(day));
    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                {/* <thead>
                    <tr>
                        <th>단어</th>
                        <th>뜻</th>
                    </tr>
                </thead> */}
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
