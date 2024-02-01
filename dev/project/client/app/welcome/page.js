// app/about/pages.js
import * as React from 'react';
import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import Tagline from '@/components/Tageline';
import Copyright from '@/components/Copyright';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Container } from '@mui/material';

export default function Welcome() {
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

                <Box
                    sx={{
                        p: 2,
                        borderRadius: 8,
                        bgcolor: '#D8D8D8',
                        width: '128px',
                        height: '128px',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                />
                <h1 h1 sx={{ mb: 2 }}>
                    8 Hope
                </h1>
                <Tagline />
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/content">
                        Get Started
                    </Button>
                </Box>
                <Copyright />
            </Box>
            <div>Welcome Page</div>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
    );
}