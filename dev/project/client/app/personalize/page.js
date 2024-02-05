// app/about/pages.js
import * as React from 'react';
import styles from "../page.module.css";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';


// docs/wires/8watches.png
export default function Personalize() {
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
                <h1 sx={{ mb: 2 }}>
                    What do you want to see on the app?
                </h1>
                <h2>
                    Select at 2 interests to personalize your experience.
                </h2>
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button variant="contained" component={NextLink} href="/">
                        Go to the home page
                    </Button>
                </Box>
                <Card variant="outlined" sx={{ maxWidth: 720 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                What do you want to see on the app?
                            </Typography>
                        </Stack>
                        <Typography color="text.secondary" variant="body2">
                            Select at 2 interests to personalize your experience.
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                    </Box>
                </Card>
                <Grid sx={{ mt: 2 }} container spacing={2} columns={4}>

                    <Grid xs={2}>
                        <Box sx={{ backgroundColor: '#d8d8d8', mr: 2 }} elevation='1'>
                            <Paper sx={{ p: 2, display: 'grid', flexDirection: 'column' }}>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid xs={2}>
                        <Box sx={{ backgroundColor: '#d8d8d8', mr: 2 }} elevation='1'>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="outlined">First Watch</Button>
                                    </Stack>
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>

                </Grid>
                <ProTip />
                <Copyright />
            </Box>
            <div>About Page</div>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div >
    );
}