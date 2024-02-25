'use client'

// components/Fourth.js
import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import SeeTimes from './SeeTimes';
import PrayerWatchDetails from '@/components/PrayerWatchDetails';
// import * as NextLink from 'next/link';
// import { Link as NextLink } from 'next/link';




// const variantMapping = {
//     h1: 'h1',
//     h2: 'h2',
//     h3: 'h3',
//     h4: 'h4',
//     h5: 'h5',
//     h6: 'h6',
//     subtitle1: 'h6',
//     subtitle2: 'h6',
//     body1: 'h3',
//     body2: 'p',
//     caption: 'span',
//     overline: 'span',
//     button: 'span',
// };

const First = () => {
    return (
        <div>
            <PrayerWatchDetails link="watch-one" />
        </div>
    );
};

export default First;
