import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import validator from 'validator';
import { regexPassword } from '../../utitities'

import {
    Link,
    Stack,
    Button,
    Typography,
    TextField,
    FilledInput,
    InputLabel,
    InputAdornment,
    IconButton,
    FormControl,
    FormHelperText,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const Signup = () => {


    const navigate = useNavigate();

    const [signIn, setSignIn] = useState({
        name: '',
        email: '',
        href: '',
    });


    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        showPassword: false,
        showRepeatPassword: false,
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        fetchError: false,
        fetchErrorMsg: '',
    })

    const handleChange = (fieldName) => (e) => {
        const currValue = e.target.value;
        switch (fieldName) {
            case 'email':
                validator.isEmail(currValue)
                    ? setErrors({ ...errors, email: false })
                    : setErrors({ ...errors, email: true })
                break

            case 'password':
                regexPassword.test(currValue)
                    ? setErrors({ ...errors, password: false })
                    : setErrors({ ...errors, password: true })
                break

            case 'repeatPassword':
                currValue === values.password
                    ? setErrors({ ...errors, repeatPassword: false })
                    : setErrors({ ...errors, repeatPassword: true })
                break

            default:

        }
        setValues({ ...values, [fieldName]: e.target.value })
    }

    const handleShowPassword = (showPasswordField) => {
        setValues({
            ...values,
            [showPasswordField]: !values[showPasswordField],
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/register', {
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

            console.log(res.body.name, res.body.email)
            setSignIn({
                name: res.body.name,
                email: res.body.email,
                href: navigate('/', res.body.name, res.body.email),
            })

            if (!res.ok) {
                const error = await res.json()
                return setErrors({
                    ...errors,
                    fetchError: true,
                    fetchErrorMsg: error.msg,
                })
            }

            const data = await res.json()
            // this is just a visual feedback for user for this demo
            // this will not be an error, rather we will show a different UI or redirect user to dashboard
            // ideally we also want a way to confirm their email or identity
            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg: data.msg,
            })
            setValues({
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
                showPassword: false,
                showRepeatPassword: false,
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
    }

    return (
        <div>
            <Stack
                component='form'
                className='relative p-10 bg-white sm:pb-16 md:pb-20 lg:pr-8 lg:w-1/2 lg:pb-28 xl:pb-32'
                onSubmit={handleSubmit}
                noValidate
                spacing={6}>
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
                        Create an Account
                    </h2>
                    <Typography paragraph align='center' className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link component={RouterLink} to='/'>
                            Login here
                        </Link>
                    </Typography>
                </div>
                <TextField
                    variant='outlined'
                    type="text"
                    label="Name"
                    name="name"
                    id="name-field"
                    value={values.name}
                    onChange={handleChange('name')}
                />

                <TextField
                    variant='outlined'
                    type='email'
                    label='Email'
                    value={values.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    helperText={errors.email && 'Please insert a valid email address'}
                />

                <FormControl variant='filled'>
                    <InputLabel htmlFor='password-field'>Password</InputLabel>
                    <FilledInput
                        id='password-field'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        error={errors.password}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() => handleShowPassword('showPassword')}
                                    edge='end'>
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                    <FormHelperText error={errors.password}>
                        Password must be at least 8 characters, have one symbol, 1
                        uppercase letter, 1 lowercase and 1 digit
                    </FormHelperText>
                </FormControl>

                <FormControl variant='filled'>
                    <InputLabel htmlFor='password-repeat-field'>
                        Repeat password
                    </InputLabel>
                    <FilledInput
                        id='password-repeat-field'
                        type={values.showRepeatPassword ? 'text' : 'password'}
                        value={values.repeatPassword}
                        onChange={handleChange('repeatPassword')}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() => handleShowPassword('showRepeatPassword')}
                                    edge='end'>
                                    {values.showRepeatPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {errors.repeatPassword && (
                        <FormHelperText error={errors.repeatPassword}>
                            Password must be the same as above
                        </FormHelperText>
                    )}
                </FormControl>
                <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    onClick={signIn}
                    sx={{
                        minWidth: '70%',
                    }}>
                    Sign me up!
                </Button>
                {errors.fetchError && (
                    <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
                )}
            </Stack>
            <div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="hidden mt-16 h-56 w-full object-cover sm:h-72 lg:block md:h-96 lg:h-full lg:w-full"
                        // src={`https://placedog.net/390/325/?random`}
                        src={`https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                        alt="Dog in Red Sweater"
                    />
                </div>
            </div>
        </div>
    )
}

export default Signup;