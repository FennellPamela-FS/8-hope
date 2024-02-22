'use client'
// components/PrayerWatchTimesList.js

import React, { useEffect } from 'react';
import styles from '../app/page.module.css';
import { usePrayerWatchTimesStore } from '../stores/prayerWatchTimesStore';
import { Box, Button, Typography } from '@mui/material';
import { Link as NextLink } from 'next/link';

const PrayerWatchTimesList = () => {

    const { prayerWatchTimes, setPrayerWatches } = usePrayerWatchTimesStore();
    // Define your prayer watches data here or import it from another file

    // const apiPrayerWatches = 'http://localhost:8000/api/prayerWatches';

    // const fetchPrayerWatches = async () => {
    //     try {
    //         const res = await fetch(`${apiPrayerWatches}`);
    //         const data = await res.json();
    //         setPrayerWatches(data); // Update the prayerWatchTimes state with the fetched data
    //         console.log(data); // Log the data object to the console for debugging purposes
    //     } catch (error) {
    //         console.error('Failed to fetch prayer watch', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchPrayerWatches();
    // }, [setPrayerWatches]);



    return (
        <div>

            {/* use Object.entries to iterate over key-value pairs in prayerWatchTimes */}
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


// useEffect(() => {
//     const fetchPrayerWatches = async () => {
//         const res = await fetch('/api/prayerWatches');
//         const data = await res.json();
//         setPrayerWatchTimes(data); // Update the prayerWatchTimes state with the fetched data
//         console.log(data); // Log the data object to the console for debugging purposes
//     };
//     fetchPrayerWatches();
// }, [setPrayerWatches])
