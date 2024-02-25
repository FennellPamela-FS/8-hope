// components/Fourth.js
import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import SeeTimes from './SeeTimes';
// import * as NextLink from 'next/link';
// import { Link as NextLink } from 'next/link';


const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'h3',
    body2: 'p',
    caption: 'span',
    overline: 'span',
    button: 'span',
};

const Fourth = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 500 }} variant="outlined">
            <CardContent>
                {/* title */}
                <Typography variant="h5" component="div">
                    Fourth Watch (The Morning Watch)
                </Typography>
                {/* subtitle  */}
                <Typography sx={{ mb: 1.5 }} variant="subtitle1">
                    3:00 A.M. to 6:00 A.M.
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body1" gutterBottom>
                    This fourth watch is always important because this is the last watch of the night. This watch is the time that satanic agents who went out to perform their activities are returning to their bases.
                </Typography>
                <Typography sx={{ mt: 1.5 }} variant="h6" gutterBottom>
                    Time for deliverance, to rise and shine, for resurrection. {' '}
                </Typography>
                <Link href="#exodus-12" color="primary">
                    Exodus 12
                </Link>{' '}
                and{' '}
                <Link href="#exodus-14" color="primary">
                    14
                </Link>. {' '}
                <Link href="#matthew-14" color="primary">
                    Matthew 14:25-33; {' '}
                </Link>

                <Link href="#psalm-19" color="primary">
                    Psalm 19:2
                </Link>
                <Typography sx={{ mt: 1.5 }} variant="h6" gutterBottom>
                    Command your morning.
                </Typography>

                <Link href="#psalm-19" color="primary">
                    Matthew 24:43
                </Link>
                <Typography sx={{ mt: 1.5 }} variant="h6" gutterBottom>
                    Time for Declaring God’s Word. {' '}
                </Typography>
                <Link href="#job-22" color="primary">
                    Job 22:27-28
                </Link>
                {/* Additional content or functionality goes here */}
            </CardContent>
            <SeeTimes />
        </Card>
    );
};

export default Fourth;
