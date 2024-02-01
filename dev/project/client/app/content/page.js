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
import { Typography } from '@mui/material';

const wakeTime = ['6:00 PM - 9:00 PM', '9:00 PM - 12:00 AM', '12:00 AM - 3:00 AM', '3:00 AM - 6:00 AM', '6:00 AM - 9:00 AM', '9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM',];
const watchTime = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function Content() {
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

                <h2 h1 sx={{ mb: 2 }}>
                    Awake? What time is it?
                </h2>
                {wakeTime.map((wake) => (

                    <Box className={styles.avBox}
                        key={wake}
                        sx={{ my: 1 }}
                    >
                        {wake}
                    </Box>
                ))}

                {/* {wakeTime.map((wake) => (
                    <Button className={styles.avBox}
                        component={NextLink} href={`/content`}
                        key={wake}
                        sx={{ my: 2, color: 'blue', display: 'block' }}
                    >
                        <Typography variant='h6'>
                            {wake}
                        </Typography>
                    </Button>
                ))} */}
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