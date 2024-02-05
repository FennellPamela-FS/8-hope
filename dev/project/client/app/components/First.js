// components/Fourth.js
import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';
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
                    First Watch (The Evening Watch)
                </Typography>
                {/* subtitle  */}
                <Typography sx={{ mb: 1.5 }} variant="subtitle1">
                    6:00 P.M. to 9:00 P.M.
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body1" gutterBottom>
                    A Time of Quiet Reflection. Jesus used the Evening Watch to go aside and pray.
                </Typography>
                <Link href="#matthew-14" color="primary">
                    Matthew 14:15-23
                </Link>{'; '}{' '}
                <Link href="#mark-1" color="primary">
                    Mark 1:32
                </Link>{'; '}{' '}
                <Link href="luke-4" color="primary">
                    Luke 4:40 {' '}
                </Link>
                <Typography sx={{ mt: 1.5 }} variant="h6" gutterBottom>
                    Period for covenant renewal with God.
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
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Fourth;
