import React from "react";

// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";

// We import RouterLink to utilize the react router.
// import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';


// Here, we display our UserNav
export default function UserNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <RouterLink className="navbar-brand" to="/">
                    <image
                        style={{ "width": 25 + '%' }}
                        src='https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png'></image>
                </RouterLink>
                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                    <RouterLink className="nav-link" to="/create">
                        <Button variant="contained"
                            className="group relative flex w-1/4 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium"
                        >
                            Add New Owner
                        </Button>
                    </RouterLink>

                </div>
                <button
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <RouterLink className="nav-link" to="/create">
                                Create Record
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}