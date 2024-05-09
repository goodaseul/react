import { useState } from "react";

const content = [
    {
        tab: " section1",
        content: "I'm the content of the section1",
    },
    {
        tab: " section2",
        content: "I'm the content of the section2",
    },
    {
        tab: " section3",
        content: "I'm the content of the section3",
    },
];
export const useTab = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};

//////////////////////////////////////////////////////////////////

const UseTab = () => {
    const { currentItem, changeItem } = useTab(0, content);

    return (
        <div className="UseTab">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} value={index}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
};

export default UseTab;
