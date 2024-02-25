// app/finish
import * as React from 'react';
import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import Tagline from '@/components/Tagline';
import Copyright from '@/components/Copyright';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Container } from '@mui/material';

export default function Finish() {
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

                <CheckCircleIcon
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
                <h1 sx={{ mb: 2 }}>
                    All Set!
                </h1>
                <Tagline />
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/content">
                        See More Times
                    </Button>
                </Box>
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/welcome">
                        Welcome Screen
                    </Button>
                </Box>
                <Copyright />
            </Box>
            <div>All Set!</div>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
    );
}