import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';

// import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
import Image from 'next/image';

const pages = [
    // { name: 'Home', link: '/' },
    { name: 'Welcome', link: '/welcome' },
    // { name: 'About', link: '/about' },
    // { name: 'Start', link: '/content' },
    // { name: 'Blog', link: '/opening' },
    // { name: 'Personalize', link: '/personalize' },
];

const settings = [
    { name: 'Profile', link: '/profile' },
    { name: 'Account', link: '/personalize' },
    { name: 'Logout', link: '/logout' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ButtonAppBar() {
    return (
        <Box className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <AppBar position="static" className="flex flex-shrink-0 items-center">
                <Toolbar>
                    <Image className="h-8 w-auto" src="/../../../images/8hope-Logo-w.svg" alt="8Hope logo" width={141} height={56} component="div" sx={{ flexGrow: 1 }} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        &nbsp;
                    </Typography>
                    <div component="div" sx={{ flexGrow: 1 }}> </div>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={NextLink} href={`${page.link}`}
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography variant='h6'>
                                    {page.name}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5" />
                        {/* <span className="sr-only">View notifications</span> */}
                        <NotificationsIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Button component={NextLink} href={`/login`} color="inherit">Login</Button>
                </Toolbar >
            </AppBar >
        </Box >
    );
}

