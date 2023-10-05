import * as React from 'react';
import { useState } from 'react';
// import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import validator from 'validator';
import { regexPassword } from '../../utitities'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { LockClosedIcon } from '@heroicons/react/20/solid';
import PetsIcon from '@mui/icons-material/Pets';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormHelperText } from '@mui/material';
// import { ErrorResponse } from '@remix-run/router';
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        name: '',
        email: '',
        href: '',
    });


    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        showPassword: false,
    });


    const [errors, setErrors] = useState({
        email: false,
        password: false,
        fetchError: false,
        fetchErrorMsg: '',
    });

    const handleChange = (fieldName) => (e) => {
        const currValue = e.target.value;
        let isCorrectValue =
            fieldName === 'email'
                ? validator.isEmail(currValue)
                // : fieldName === 'password'
                : regexPassword.test(currValue)

        isCorrectValue
            ? setErrors({ ...errors, [fieldName]: false })
            : setErrors({ ...errors, [fieldName]: true })

        setValues({ ...values, [fieldName]: e.target.value });
    };

    const handleShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }




    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                }),
            })

            console.log(response.body.email)
            setLogin({
                email: response.body.email,
                href: navigate('/User', response.body.email),
            })

            if (!response.ok) {
                const error = await response.json()
                return setErrors({
                    ...errors,
                    fetchError: true,
                    fetchErrorMsg: error.msg,
                })
            }

            const data = await response.json()
            console.log({ data })

            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg: data.msg,
            })
            // redirect user to main page
            setValues({
                name: '',
                email: '',
                password: '',
                showPassword: false,
            })
            return
        } catch (error) {
            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg:
                    'There was a problem with our server, please try again later',
            })
        }
    };

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
                            <Typography paragraph align='center' className="mt-2 text-center text-sm text-gray-600">
                                Don't have an account yet?{' '}
                                <Link component={RouterLink} className="font-medium text-blue-600 hover:text-blue-500" to="/signup" variant="contained">Sign up here</Link>
                            </Typography>
                        </div>
                        <form
                            className="mt-8 space-y-6 p-10"
                            action="#"
                            onSubmit={handleSubmit}
                            noValidate
                        >
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
                                        type="email"
                                        label="Email"
                                        defaultValue="Email Address"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        error={errors.email}
                                        helperText={errors.email && 'Please insert a valid email address'}
                                    />
                                </div>
                                <div className='py-3'>
                                    <label htmlFor="password-field" className="sr-only">
                                        Password
                                    </label>
                                    <TextField
                                        fullWidth
                                        id="password-field"
                                        label="Password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        error={errors.password}
                                        autoComplete="current-password"
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleShowPassword}
                                                    edge='end'>
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
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
                                <Button
                                    variant="contained"
                                    // href="/Search"
                                    type='submit'
                                    onClick={login}
                                    disabled={errors.email || errors.password}
                                    // sx={{ minWidth: '70%' }}
                                    className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 " aria-hidden="true" />
                                    </span>
                                    Login
                                </Button>
                                {errors.fetchError && (
                                    <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
                                )}
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

export default Login