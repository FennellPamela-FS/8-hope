import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// import CardItem from '../components/cards/CardItem';

// import { StarIcon } from '@heroicons/react/20/solid'
// import { RadioGroup } from '@headlessui/react'

// const getDogData = async () => {
//     console.log("Client Side Dog Data");
//     return await axios.get('https://api.thedogapi.com/v1/breeds');

// };

// getDogData();

const dogBreadCrumbs = {
    name: 'Search',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Dog', href: '/Main' },
        { id: 2, name: 'Breeds', href: '/Search' },
    ],
}


const Search = () => {
    const [dogs, setDogs] = useState([])
    const [text, setText] = useState("")
    const [searched, setSearched] = useState(false)
    // const [searchedImg, setSearchedImg] = ("")


    useEffect(() => {
        // get request to setDogs
        // axios.get(`https://api.thedogapi.com/v1/breeds/`)
        // axios.get(`http://localhost:5000/dogs`)
        axios.get('/dogs')
            .then((response) => {
                setDogs(response.data);
            })
            .catch((error) => console.log(error))

        setSearched(false)

        // const getDogData = async () => {
        //     try {
        //         // const res = await fetch("https://api.thedogapi.com/v1/breeds/")
        //         const res = await fetch(`http://localhost:5000/dogs`)
        //         const data = await res.json()
        //         setDogs(data)
        //         // console.log(data.slice(0, 6))
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // }
        // getDogData()
    }, [])





    const searchForDog = async () => {
        // axios.get(`https://localhost:5000/dogs/${text}`)
        // axios.get(`https://localhost:5000/dogs/search?q=${text}`)
        // axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${text}`)
        axios.get(`/${text}`)
            .then((searchForDog) => {
                console.log("Searching for Dog ...")
                console.log(searchForDog.data.id)
                setDogs(searchForDog.data)


            })
            .catch((error) => console.log(error))


    }

    const handleSubmit = (e) => {
        e.preventDefault()

        searchForDog()
        setSearched(true)
    }


    return (
        <div>
            <div className="py-12 bg-gradient-to-br from-blue-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-lg font-semibold">Transactions</h2>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>
                </div>
            </div>
            {!dogs ? (
                <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
                    Loading...
                </h1>
            ) : (
                <>
                    <div className="bg-gray-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div>
                                <div className='p-6'>
                                    <Breadcrumbs aria-label="breadcrumb" >
                                        {dogBreadCrumbs.breadcrumbs.map((breadcrumb) => (
                                            <>
                                                <Link key={breadcrumb.id} underline="hover" color="inherit" href={breadcrumb.href} className="flex items-center">
                                                    {breadcrumb.name}
                                                </Link>
                                            </>
                                        ))}
                                        <Typography color="text.primary">{dogBreadCrumbs.name}</Typography>
                                    </Breadcrumbs>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="max-w-xl mx-auto pt-7"
                                        autoComplete="off"
                                    >
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            placeholder="Search for a dog / breed"
                                            className="py-2 px-4 rounded shadow w-full text-slate-400 placeholder-gray"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                        />
                                    </form>
                                </div>
                            </div>                            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                    {!searched ? (
                                        dogs.map((dog) => (
                                            <div key={dog.id} className="group relative">
                                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                    <img
                                                        src={dog.image.url}
                                                        alt={dog.name}
                                                        className="w-full object-cover object-center"
                                                    />
                                                </div>
                                                <h3 className="mt-6 text-sm text-gray-500">
                                                    <a href={`/${dog.name}`} key={dog.id}>
                                                        <span className="absolute inset-0" />
                                                        {dog.name}
                                                    </a>
                                                </h3>
                                                <p className="pb-8 text-base font-semibold text-gray-900">{dog.bred_for}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            {dogs.map((dog) => {
                                                if (dog.reference_image_id === undefined) {
                                                    return (
                                                        <div key={dog.name} className="group relative">
                                                            <div className="relative h-full w-full overflow-hidden rounded-lg bg-hero-bg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                                {/* <img
                                                                    src={`https://placedog.net/390/325/${dog.id}`}
                                                                    alt={dog.name}
                                                                    className="w-full object-cover object-center blue-500 backdrop-opacity-100 hover:opacity-100"
                                                                /> */}
                                                            </div>
                                                            <h3 className="mt-6 text-sm text-gray-500">
                                                                <a href={`/${dog.name}`} key={dog.id}>
                                                                    <span className="absolute inset-0" />
                                                                    {dog.name}
                                                                </a>
                                                            </h3>
                                                            <p className="text-base font-semibold text-gray-900">{dog.bred_for}</p>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <div key={dog.name} className="group relative">
                                                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                                <img
                                                                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                                                                    alt={dog.name}
                                                                    className="w-full object-cover object-center"
                                                                />
                                                            </div>
                                                            <h3 className="mt-6 text-sm text-gray-500">
                                                                <a href={`/${dog.name}`} key={dog.id}>
                                                                    <span className="absolute inset-0" />
                                                                    {dog.name} SEARCHED
                                                                </a>
                                                            </h3>
                                                            <p className="text-base font-semibold text-gray-900">{dog.bred_for}</p>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Search;
