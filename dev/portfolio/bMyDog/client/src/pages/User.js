import React from "react";

import RecordList from "../components/RecordList";

import MyUsers from "../components/MyUsers";

const User = () => {

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-left">Active Users </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        {/* Start Dashed-lines */}
                        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                            <div className="mt-10 sm:mt-0 bg-gray-100">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    {/* User Entry Form */}
                                    <div id='container'>
                                        <div className="px-4 py-5 sm:px-6">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Owner's Information</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:col-span-2 md:mt-0">
                                        <RecordList />

                                    </div>
                                    {/* End User Entry Form */}
                                </div>
                                {/* End Dashed-lines */}
                            </div>

                            <>
                                <div>
                                    <div class="flex items-center space-x-2 text-base">
                                        <MyUsers />
                                    </div>
                                </div>
                            </>
                            {/* /End replace */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default User;
