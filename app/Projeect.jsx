"use client";
import React from 'react';
import { Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

function Exemple() {
    const Morist = "./Morist.png";
    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                {/* Conteneur global avec flexbox */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Colonne gauche */}
                    <div className="flex-1">
                        <Chip
                            variant="shadow"
                            className="bg-gray-100 border border-gray-300 text-black text-medium"
                        >
                            2024
                        </Chip>
                        <br/>
                        <br/>
                        <h1 className="font-medium text-2xl">
                            Morist - Premium Agency Tourism Website <br/>Template
                        </h1>
                        <br/>

                        <p className="text-gray-500">
                            Morist est une plateforme innovante au Maroc visant à faciliter<br/> la connexion entre les
                            guides touristiques et les visiteurs. Morist<br/> permet aux guides de proposer des offres
                            de voyage clés en main,<br/> incluant la destination et le prix, afin de simplifier et
                            d'enrichir
                            l'expérience<br/> touristique dans le pays.
                        </p>
                        <br/>
                        <br/>
                        <div className="flex">
                            <p className="text-gray-500">Role</p>
                            <p className="ml-auto">Web Designer</p>
                        </div>
                        <div className="flex mt-4">
                            <hr className="w-1/2 border-t border-gray-300 font-bold"/>
                            <hr className="w-1/2 ml-auto border-t border-gray-300 font-bold"/>
                        </div>
                        <div className="flex mt-4">
                            <p className="text-gray-500">Deliverables</p>
                            <p className="ml-auto">Front End</p>
                        </div>
                        <div className="flex mt-4">
                            <hr className="w-1/2 border-t border-gray-300 font-bold"/>
                            <hr className="w-1/2 ml-auto border-t border-gray-300 font-bold"/>
                        </div>
                        <div className="flex mt-4">
                            <p className="text-gray-500">Visit Sit</p>
                            <a href="http://morist.mywire.org/" className="ml-auto">
                                <svg width="18" height="18" viewBox="0 0 15 15" fill="none"
                                     className="mt-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex mt-4">
                            <hr className="w-1/2 border-t border-gray-300 font-bold"/>
                            <hr className="w-1/2 ml-auto border-t border-gray-300 font-bold"/>
                        </div>
                    </div>
                    {/* Colonne droite */}
                    <div className="flex-none mr-[60px]">
                        <Chip
                            variant="shadow"
                            className="bg-gray-100 border border-gray-300 text-black text-medium"
                        >
                            Morist
                        </Chip>
                        <br/>
                        <br/>
                        <Image
                            alt="NextUI hero Image"
                            src={Morist}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exemple;
