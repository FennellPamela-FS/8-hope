// components/PrayerWatchDetails.js
'use client'

import React from 'react';
import { usePrayerWatchTimesStore } from '../stores/prayerWatchTimesStore';
import { Box, Typography, Card, CardActions, CardContent, Button } from '@mui/material';
import Link from '@mui/material/Link';
import SeeTimes from "../app/components/SeeTimes";

const PrayerWatchDetails = ({ link }) => {
    const prayerWatchesData = usePrayerWatchTimesStore((state) => state.prayerWatchesData);

    // Find the prayer watch that matches the provided link
    const prayerWatch = prayerWatchesData.find(watch => watch.link === link);

    if (!prayerWatch) {
        return <div>No prayer watch found for this route.</div>;
    }

    return (
        <div>
            {/* title */}
            <h1 sx={{ mb: 2 }}>
                {prayerWatch.title}
            </h1>
            <Card sx={{ minWidth: 275, maxWidth: 500 }} variant="outlined">
                <CardContent key={prayerWatch.link}>
                    {/* subtitle  */}
                    <Typography sx={{ mb: 1.5 }} variant="subtitle1">
                        {prayerWatch.subtitle}
                    </Typography>
                    {/* subtitle  */}
                    <Typography sx={{ mb: 1.5 }} variant="subtitle1">
                        {prayerWatch.timeRange}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body1" gutterBottom>
                        {prayerWatch.description}
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} variant="body1" gutterBottom>
                        Scripture Reference:
                    </Typography>
                    <Link href={`${prayerWatch.scriptureReference}`} color="primary">
                        {prayerWatch.scriptureReference}
                    </Link>
                    <Typography sx={{ mt: 1.5 }} variant="h6" gutterBottom>
                        Additional Information:
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} variant="body1" gutterBottom>
                        Jewish Title: {prayerWatch.jewishTitle}
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} variant="body1" gutterBottom>
                        Roman Title: {prayerWatch.romanTitle}
                    </Typography>
                    {/* Additional content or functionality goes here */}
                </CardContent>
                <SeeTimes />
            </Card>
        </div>
    );
};

export default PrayerWatchDetails;