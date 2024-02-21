'use client'
// components/PrayerWatchTimesList.js
import React from 'react';
import styles from '../app/page.module.css';

import { usePrayerWatchTimesStore } from '../stores/prayerWatchTimesStore';
import { Box, Button, Typography } from '@mui/material';

// import Link from '@mui/material/Link';
import { Link as NextLink } from 'next/link';

const PrayerWatchTimesList = () => {

    const { prayerWatchTimes } = usePrayerWatchTimesStore();
    // Define your prayer watches data here or import it from another file

    return (
        <div>

            {Object.entries(prayerWatchTimes).map(([timeRange, routePath]) => (
                <Box key={routePath} sx={{ color: 'blue', display: 'block' }}>
                    <Button className={styles.avBox} sx={{ mb: 2 }} variant="contained" component={NextLink} href={`/${routePath}`}>
                        <Typography variant='h6'>
                            {timeRange}
                        </Typography>
                    </Button>
                </Box>
            ))}

        </div >

    );
};

export default PrayerWatchTimesList;

{/* <Box
    className={styles.avBox}
    key={index}
    sx={{ my: 2, color: 'blue', display: 'block' }}
>
    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/">
        <Typography variant='h6'>
            {timeRange}
        </Typography>
    </Button>
</Box> */}