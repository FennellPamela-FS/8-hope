// theme.js

import { createTheme } from "@mui/material/styles";

// override MUI default theme settings

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const theme = createTheme({
    palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        primary: {
            main: "#fcba03",
        },
    },
});
[prefersDarkMode]

export default {
    theme,
    prefersDarkMode
};