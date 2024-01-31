// theme.js

import { createTheme } from "@mui/material/styles";

// override MUI default theme settings
const theme = createTheme({
    palette: {
        primary: {
            main: "#fcba03",
        },
    },
});

export default theme;