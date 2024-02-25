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
import Image from 'next/image';

const pages = ['welcome'];

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Image src="/../../../images/8hope-Logo-w.svg" alt="8Hope logo" width={141} height={56} component="div" sx={{ flexGrow: 1 }} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        &nbsp;
                    </Typography>
                    <div component="div" sx={{ flexGrow: 1 }}> </div>
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

