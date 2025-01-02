import { createTheme } from "@mui/material";
import { globalColors } from "./globalColor";
export let theme = createTheme({
    palette: {
        primary: {
            main: globalColors.green["300"],
            light: globalColors.green["200"],
            dark: globalColors.green["500"],
            contrastText: globalColors.white,
        },
        secondary: {
            main: globalColors.blue["300"],
            light: globalColors.blue["200"],
            dark: globalColors.blue["500"],
            contrastText: globalColors.white,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "large",
                color: "primary",
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontSize: "2rem",
                },
            },
        },
    },
});
