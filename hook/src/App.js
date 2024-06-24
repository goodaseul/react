import { useState } from "react";
import UseInput from "./useInput";
import UseTab from "./useTab";
import UseTitle from "./useTitle";
import UseClick from "./useClick";
import UseHover from "./useHover";
import UseConfirm from "./useConfirm";
import UsePreventLeave from "./usePreventLeave";
import UseBeforeLeave from "./useBeforeLeave";
import UseFadeIn from "./useFadeIn";

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

const useInputPr = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        let willChange = true;
        const {
            target: { value },
        } = event;

        if (typeof validator === "function") {
            willChange = validator(value);
        }

        if (willChange) {
            setValue(value);
        }
    };

    return {
        value,
        onChange,
    };
};

const UseInputPr = () => {
    const maxLen = (value) => value.length < 12;
    const name = useInputPr("name:", maxLen);
    return (
        <>
            <h1># useInputPractice</h1>
            <input placeholder="Name" {...name} />
        </>
    );
};

const useTabPr = (initalTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initalTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};

const UseTabPr = () => {
    const { currentItem, changeItem } = useTabPr(0, content);
    return (
        <>
            <h1># useTabPractice</h1>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} key={index}>
                    {section.tab}
                </button>
            ))}

            {currentItem.content}
        </>
    );
};

const App = () => {
    return (
        <>
            <div className="useState">
                <h1>hook_useState</h1>
                <UseInput />
                <UseTab />
                <UseInputPr />
                <UseTabPr />
            </div>
            <div className="useEffect">
                <h1>hook_useEffect</h1>
                <UseTitle />
                <UseClick />
                <UseHover />
                <UseBeforeLeave />
            </div>
            <UseFadeIn />
            <div className="">
                <h1>hook_useConfirm & usePreventLeave</h1>
                <UseConfirm />
                <UsePreventLeave />
            </div>
        </>
    );
};

export default App;
