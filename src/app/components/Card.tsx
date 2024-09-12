"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface IChampions {
    id: Number
    name: String
    title: String
    lore: String
    tags: String[]
}

export default function Card({ props }: any) {
    const [loading, setLoading] = useState<Boolean>(false);
    const [data, setData] = useState<IChampions | null>(null)
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const openModal = (id: any) => {
        setData(null)
        if (modalRef.current) {
            getData(id)
            modalRef.current.showModal()
        }
    }
    const getData = async (id: string) => {
        setLoading(true)
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${id}.json`, { cache: "no-cache" })
        const { data: data } = await response.json()
        setData(data[id])
        setLoading(false)
    }
    return (
        <React.Fragment>
            {loading ? (
                <dialog className="h-2/5 w-96 skeleton">

                </dialog>
            ) :
                (<dialog id="my_modal_2" className="modal" ref={modalRef}>
                    <div className="modal-box p-0">
                        <div className="card w-full">
                            <figure>
                                <Image
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data?.id}_0.jpg`}
                                    alt="Champion Splash"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                            />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {data?.name}
                                    <div className="badge badge-secondary whitespace-nowrap">{data?.title}</div>
                                </h2>
                                <p className="text-slate-400">{data?.lore && data?.lore.length > 150 ? (`${data?.lore.slice(0, 150)}...`) : (data?.lore)}</p>
                                <div className="card-actions justify-end">
                                    {data?.tags.map((data, index) => (
                                        <div className="badge badge-outline" key={index}>{data}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button></button>
                    </form>
                </dialog>)
            }
            {props.champion.map((data: any) => (
                <div className="relative cursor-pointer group" key={data.key} onClick={() => openModal(data.id)}>
                    <div className="avatar">
                        <div className="w-full rounded-md">
                            <Image width={100} height={100} loading="lazy" src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${data.image.full}`} alt={data.name} />
                        </div>
                    </div>
                    <div className="hidden group-hover:block absolute bg-customColor h-full top-0 w-full ">
                        <div className="flex items-center justify-center z-10  h-full w-full">
                            <h3 className="font-medium text-sm text-white text-center">{data.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}
