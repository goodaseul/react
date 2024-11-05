import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { Helmet } from "react-helmet-async";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
    // const [isDark, setIsDark] = useState(false);
    // const toggleDark = () => setIsDark((current) => !current);

    // atom 버블 사용하는 법
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <Helmet>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" />
                </Helmet>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
        </>
    );
}

export default App;

/* 전체 document에 적용되는 css => createGlobalStyle는 컴포넌트 하나를 만드는데
그 컴포넌트는 렌더링 될 때 전역 스코프에 스타일들을 올려줌 => 고립되지 않고 전체에 적용됨 */
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
    box-sizing: border-box;
}
body{
    font-family: "IBM Plex Sans KR", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
}
// add options
a{
    text-decoration: none;
    color: inherit;
}
`;
