// docs / wires /05 Customization3.png
import * as React from 'react';
import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Fourth from '@/app/components/Fourth';
import PrayerWatchDetails from '@/components/PrayerWatchDetails';

// docs / wires /05 Customization3.png
export default function WatchFour() {
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
                <PrayerWatchDetails link="watch-four" />
                <Box sx={{ maxWidth: 'sm', mt: 1.5 }} >
                    <Button variant="contained" component={NextLink} href="/finish">
                        Continue
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