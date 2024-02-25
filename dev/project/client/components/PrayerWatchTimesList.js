'use client'
// components/PrayerWatchTimesList.js

import React, { useEffect } from 'react';
import styles from '../app/page.module.css';
import { usePrayerWatchTimesStore } from '../stores/prayerWatchTimesStore';
import { Box, Button, Typography } from '@mui/material';
import { Link as NextLink } from 'next/link';

const PrayerWatchTimesList = () => {

    const prayerWatchTimes = usePrayerWatchTimesStore((state) => state.prayerWatchTimes);
    // const { prayerWatchTimes, setPrayerWatches } = usePrayerWatchTimesStore();

    return (
        <div>
            {prayerWatchTimes.map((watch) => (
                <Box key={watch.link} sx={{ color: 'blue', display: 'block' }}>
                    <Button className={styles.avBox} sx={{ mb: 2 }} variant="contained" component={NextLink} href={`/${watch.link}`}>
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