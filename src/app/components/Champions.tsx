import React from 'react'
import getChampions from '../api/getChampions';
import Card from './Card';

export default async function Champions() {
    const { props } = await getChampions();
    return (
        <div className="w-full min-h-screen h-auto bg-backgroundBlack">
            <div className="w-full m-auto lg:w-10/12 xl:w-10/12 2xl:w-10/12">
                <h2 className="font-bold text-2xl py-10 px-5">Champions</h2>
                <div className="flex flex-wrap justify-center">
                    <Card props={props}/>
                </div>
            </div>
        </div>
    )
}

