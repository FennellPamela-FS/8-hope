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

const pages = ['welcome'];

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
                            <Button className={classNames(page.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium')}
                                aria-current={page.current ? 'page' : undefined}
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
                    <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5" />
                        {/* <span className="sr-only">View notifications</span> */}
                        <NotificationsIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Button component={NextLink} href={`/login`} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

