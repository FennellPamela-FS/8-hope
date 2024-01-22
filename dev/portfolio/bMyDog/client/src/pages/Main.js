import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { LockClosedIcon } from '@heroicons/react/20/solid';
import PetsIcon from '@mui/icons-material/Pets';

import Pics from './Pics'



const Main = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                </Box>
            </Container>
            <Pics />
            <div className="overflow-hidden min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-md mx-auto space-y-8">
                    <div className='relative pb-8 bg-white sm:pb-16 md:pb-20 lg:pr-8 lg:w-1/2 lg:pb-28 xl:pb-32'>
                        <div>
                            <div className="flex row justify-center">
                                <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#1976d2' }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: '#1976d2',
                                        textDecoration: 'none',
                                    }}
                                >
                                    bMyDOG
                                </Typography>
                            </div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="/" className="font-medium text-blue-600 hover:text-blue-500">
                                    start your 14-day free trial
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Username"
                                    />
                                </div>
                                <div className='py-3'>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <TextField
                                        fullWidth
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <FormGroup className="flex items-center">
                                    <FormControlLabel
                                        id="remember-me"
                                        name="remember-me"
                                        className="ml-2 block text-sm"
                                        control={<Checkbox defaultChecked />} label="Remember me" />
                                </FormGroup>
                                <Link className="text-sm" href="/user" variant="overline">Forgot Password?</Link>
                            </div>

                            <div>
                                <Button variant="contained"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 " aria-hidden="true" />
                                    </span>
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="hidden mt-16 h-56 w-full object-cover sm:h-72 lg:block md:h-96 lg:h-full lg:w-full"
                        // src={`https://placedog.net/390/325/?random`}
                        src={`https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                        alt="Dog in Red Sweater"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main;        