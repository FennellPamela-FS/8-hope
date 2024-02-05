// app/about/pages.js
import * as React from 'react';
import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

// docs/wires/8watches.png
export default function Personalize() {
    return (
        <div className={styles.container}>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 sx={{ mb: 2 }}>
                    Material UI - Next.js example
                </h1>
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button variant="contained" component={NextLink} href="/">
                        Go to the home page
                    </Button>
                </Box>
                <ProTip />
                <Copyright />
            </Box>
            <div>About Page</div>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
    );
}