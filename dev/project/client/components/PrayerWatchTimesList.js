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
    const prayerWatches = [
        // prayer watches data
        {
            id: 'watch-one',
            title: 'First Watch',
            timeRange: '6:00 PM - 9:00 PM',
            description: 'Contemplation and laying foundations in prayer.',
            scriptureReference: 'Psalm 92:1-2 (NIV)',
            // add additional details for this prayer watch
            link: '/watch-one',
        },
    ];

    // Define a mapping of prayer watch times to route paths
    const prayerWatchRoutes = {
        '6:00 PM - 9:00 PM': 'watch-one',
        '9:00 PM - 12:00 AM': 'watch-two',
        '12:00 AM - 3:00 AM': 'watch-three',
        '3:00 AM - 6:00 AM': 'watch-four',
        '6:00 AM - 9:00 AM': 'watch-five',
        '9:00 AM - 12:00 PM': 'watch-six',
        '12:00 PM - 3:00 PM': 'watch-seven',
        '3:00 PM - 6:00 PM': 'watch-eight',
        // ... add other mappings here
    };




    return (
        <div>

            {/* {prayerWatchTimes.map((timeRange, index) => (
                // <li key={index}>{timeRange}</li>

                <Box
                    // className={styles.avBox}
                    key={index}
                    sx={{ color: 'blue', display: 'block' }}
                >
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href={`/${prayerWatchRoutes[watch.timeRange.link]}`}>
                        <Typography variant='h6'>
                            {timeRange}
                        </Typography>
                    </Button>
                </Box>

            ))
            } */}

            {prayerWatches.map((watch) => (
                <Box key={watch.id} sx={{ color: 'blue', display: 'block' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href={`${watch.link}`}>
                        <Typography variant='h6'>
                            {watch.timeRange}
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