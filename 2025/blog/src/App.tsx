import { useState } from "react";
import Modal from "./components/Modal";

interface iTitleItem {
    id: number;
    text: string;
}

function App() {
    const initialTitles: iTitleItem[] = [
        { id: 0, text: "title1" },
        { id: 1, text: "title2" },
        { id: 2, text: "title3" },
        // "title1", "title2", "title3"]; // 초기값 저장
    ];
    const [title, setTitle] = useState<iTitleItem[]>([...initialTitles]);
    const [titleChange] = useState<string[]>(["change1", "change2", "change3"]);
    const [like, setlike] = useState<number[]>([1, 2, 3]);

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="App">
            <h4>Blog</h4>

            <div className="content">
                <h3>블로그 글 제목</h3>

                <div className="list">
                    {title.map((item, index) => {
                        return (
                            <h4 key={index}>
                                <p
                                    onClick={() => {
                                        setIsShow(!isShow);
                                    }}
                                >
                                    {item.text}
                                </p>
                                <p>
                                    <span
                                        onClick={() => {
                                            const newlike = [...like];
                                            newlike[index] += 1;
                                            setlike(newlike);
                                        }}
                                    >
                                        👍
                                    </span>
                                    <span
                                        onClick={() => {
                                            const disLike = [...like];
                                            if (disLike[index] < 1) return alert("좋아요 개수가 없습니다.");
                                            disLike[index] -= 1;
                                            setlike(disLike);
                                        }}
                                    >
                                        👎
                                    </span>
                                    {like[index]}
                                </p>
                                <button
                                    onClick={() => {
                                        const updatedTitle = [...title];
                                        const originalIndex = initialTitles.findIndex((t) => t.id === item.id);
                                        updatedTitle[index] = {
                                            ...updatedTitle[index],
                                            text: titleChange[originalIndex],
                                        };
                                        // titleChange[index];
                                        setTitle(updatedTitle);
                                    }}
                                >
                                    타이틀 변경버튼
                                </button>

                                <button
                                    onClick={() => {
                                        const updatedTitle = [...title];
                                        const originalIndex = initialTitles.findIndex((t) => t.id === item.id);
                                        updatedTitle[index] = {
                                            ...updatedTitle[index],
                                            text: initialTitles[originalIndex].text,
                                        };
                                        setTitle(updatedTitle);
                                    }}
                                >
                                    타이틀 원상복구
                                </button>
                            </h4>
                        );
                    })}
                </div>

                <button
                    onClick={() => {
                        const sortKor = [...title].sort((a, b) => (a > b ? 1 : -1));

                        setTitle(sortKor);
                    }}
                >
                    가나다순 정렬
                </button>

                {isShow ? <Modal /> : null}
            </div>
        </div>
    );
}

export default App;
