import React from 'react'
import getChampions from '../api/getChampions';
import Card from './Card';

export default async function Champions() {
    const { props } = await getChampions();
    return (
        <div className="w-full min-h-screen h-auto bg-backgroundBlack">
            <div className="w-11/12 m-auto sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
                <h2 className="font-bold text-2xl py-10">Champions</h2>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10">
                    <Card props={props}/>
                </div>
            </div>
        </div>
    )
}

