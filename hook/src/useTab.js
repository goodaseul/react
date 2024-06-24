import { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
    {
        tab: "Section 3",
        content: "I'm the content of the Section 3",
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};

const UseTab = () => {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <>
            <h1># useTab</h1>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} key={index}>
                    {section.tab}
                </button>
            ))}
            {currentItem.content}
        </>
    );
};

export default UseTab;
