
import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const chImg = "Invalid Entry - Image Not Correct";

const DogDetailPage = () => {
    const [dog, setDog] = useState([])
    const { name } = useParams()


    useEffect(() => {
        const fetchSingleDogData = async () => {
            try {
                const res = await fetch(
                    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
                )
                const data = await res.json()
                setDog(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }

        }

        fetchSingleDogData()
    }, [name])

    return (

        <>        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                {dog.map((details) => (
                    <div>
                        <div className="flex md:flex-row items-center justify-center flex-col">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details.name}</h2>
                            <Link
                                to="/Search"
                                className="inline-block bg-blue-500 py-2 pr-3 rounded mx-5 text-white hover:bg-blue-600 transition-all duration-200"
                            >
                                <ChevronLeftIcon className="h-5 w-5 " aria-hidden="true" />
                                Back
                            </Link>
                            <p>
                                {chImg}
                            </p>
                        </div>

                        <div className="flex-1">
                            <dl className="mt-16 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8">
                                {dog.map((details) => (
                                    <div key={details.id} className="border-t border-gray-200 pt-4">
                                        <dt className="mt-5 font-medium text-gray-900">Bred For</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.bred_for}</dd>

                                        <dt className="mt-5 font-medium text-gray-900">Height</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.height.metric}</dd>

                                        <dt className="mt-5 font-medium text-gray-900">Weight</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.weight.metric}</dd>

                                        <dt className="mt-5 font-medium text-gray-900">Breed Group</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.breed_group}</dd>

                                        <dt className="mt-5 font-medium text-gray-900">Lifespan</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.life_span}</dd>

                                        <dt className="mt-5 font-medium text-gray-900">Temperament</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{details.temperament}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                ))}
                <div>
                    <>
                        {dog.map((details) => {
                            if (details.reference_image_id === undefined) {
                                return (
                                    // <img
                                    //     src={`https://placedog.net/390/325/${details.id}`}
                                    //     alt={`${details.name} + ${chImg} `}
                                    //     className="object-cover object-center rounded-md"
                                    // />
                                    <div className="h-80 w-full overflow-hidden rounded-lg bg-cover bg-center bg-hero-bg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-">
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <img
                                        src={`https://cdn2.thedogapi.com/images/${details.reference_image_id}.jpg`}
                                        alt={details.name}
                                        className="object-cover object-center rounded-md"
                                    />
                                )
                            }
                        })}
                    </>
                </div>
            </div>
        </div>
        </>
    )
}

export default DogDetailPage;
