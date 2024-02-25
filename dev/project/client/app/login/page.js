// app/about/pages.js
import * as React from 'react';
import styles from "../page.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import * as NextLink from 'next/link';
import { Link as NextLink } from 'next/link';
<<<<<<< HEAD
import Tagline from '@/components/Tagline';
import Copyright from '@/components/Copyright';
import { Typography } from '@mui/material';
import PrayerWatchTimesList from '@/components/PrayerWatchTimesList';

// const wakeTime = ['6:00 PM - 9:00 PM', '9:00 PM - 12:00 AM', '12:00 AM - 3:00 AM', '3:00 AM - 6:00 AM', '6:00 AM - 9:00 AM', '9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM',];
// const watchTime = ['1', '2', '3', '4', '5', '6', '7', '8'];


export default function Login() {
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

                <h2 sx={{ mb: 2 }}>
                    Awake? What time is it?
                </h2>
                <PrayerWatchTimesList />
                <Tagline />
                <Box sx={{ maxWidth: 'sm' }}>
                    <Button sx={{ mb: 2 }} variant="contained" component={NextLink} href="/">
                        Continue
                    </Button>
                </Box>
                <Copyright />
            </Box>
            <Link component={NextLink} href="/welcome">Welcome page</Link>
            <Link component={NextLink} href="/">To Home page</Link>
            {/* <Link href="/">
                To Home page
            </Link> */}
        </div>
=======
import Tagline from '@/components/Tageline';
import Copyright from '@/components/Copyright';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Container } from '@mui/material';
import Logo from '@/components/Logo';

export default function Welcome() {
    return (

        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}

            <div className="h-full bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
>>>>>>> models_shemas
    );
}