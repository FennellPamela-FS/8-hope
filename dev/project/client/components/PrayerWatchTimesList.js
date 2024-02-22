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

    const apiPrayerWatches = 'http://localhost:8000/api/prayerWatches';

    const fetchPrayerWatches = async () => {
        try {
            const res = await fetch(`${apiPrayerWatches}`);
            const data = await res.json();
            setPrayerWatches(data); // Update the prayerWatchTimes state with the fetched data
            console.log(data); // Log the data object to the console for debugging purposes
        } catch (error) {
            console.error('Failed to fetch prayer watch', error);
        }
    };

    useEffect(() => {
        fetchPrayerWatches(); // Fetch prayer watches on component mount
        // console.log('prayerWatchTimes', prayerWatchTimes); // Log the prayerWatchTimes state for debugging purposes
        // console.log('setPrayerWatches', setPrayerWatches); // Log the setPrayerWatches state for debugging purposes
        // return () => {
        //     setPrayerWatches({}); // Clear the prayerWatchTimes state on component unmount
        // };  // Clean up the prayerWatchTimes state on component unmount
        // // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setPrayerWatches]);

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
