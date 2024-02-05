import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';

const pages = ['welcome'];

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Your Logo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={NextLink} href={`/${page}`}
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography variant='h6'>
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

