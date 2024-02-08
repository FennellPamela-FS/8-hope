// app/about/pages.js
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
import { Typography } from '@mui/material';
import PrayerWatchTimesList from '@/components/PrayerWatchTimesList';

// const wakeTime = ['6:00 PM - 9:00 PM', '9:00 PM - 12:00 AM', '12:00 AM - 3:00 AM', '3:00 AM - 6:00 AM', '6:00 AM - 9:00 AM', '9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM',];
// const watchTime = ['1', '2', '3', '4', '5', '6', '7', '8'];


export default function Logout() {
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

                <h2 sx={{ mb: 2 }}>
                    Awake? What time is it?
                </h2>
                <PrayerWatchTimesList />
                <Tagline />
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/">
                        Continue
                    </Button>
                </Box>
                <Copyright />
            </Box>
            <Link component={NextLink} href="/welcome">Welcome page</Link>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
    );
}