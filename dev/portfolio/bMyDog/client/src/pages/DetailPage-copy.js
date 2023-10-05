import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// const features = [
//     { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//     { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//     { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//     { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//     { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//     { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]


const DetailPage = () => {

    const [dog, setDog] = useState([])
    // const { name } = useParams()
    const { name } = useParams()

    useEffect(() => {

        const getData = async () => {
            try {
                const res = await fetch(`https://localhost:5000/dogs/`)
                const data = await res.json()
                setDog(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getData()

        const getDataByName = async (name) => {
            try {
                const res = await fetch(`https://localhost:5000/dogs/${name}`)
                const data = await res.json()
                setDog(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getDataByName()
    }, [name])


    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                {dog.map((details) => (
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details.name}</h2>
                        <p className="mt-4 text-gray-500">
                            {details.description}
                        </p>import {useParams} from 'react-router';


                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div key={details.id} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{details.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{details.description}</dd>
                            </div>
                        </dl>
                    </div>
                ))}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    {dog.map((details) => (
                        <img
                            src={`https://cdn2.thedogapi.com/images/${details.reference_image_id}.jpg`}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                    ))}
                    <img
                        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300q=80"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1515747563347-3bd9a4df8ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1571166581031-9d5db95d6df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailPage;
