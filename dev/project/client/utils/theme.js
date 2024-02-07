// theme.js
import { Roboto } from 'next/font/google';
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// override MUI default theme settings
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#fcba03",
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h6',
                    subtitle2: 'h6',
                    body1: 'p',
                    body2: 'p',
                    caption: 'span',
                    overline: 'span',
                    button: 'span',
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;