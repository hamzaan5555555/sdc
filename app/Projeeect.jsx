"use client";
import React from 'react';
import { Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import {Button} from "@nextui-org/react";


function Exeemple() {
    const XDgame = "./XDGame.png";
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
                            XDGAME -  Website for Dowload Game
                        </h1>
                        <br/>

                        <p className="text-gray-500">
                            XDGame est un site web dédié au téléchargement gratuit de jeux vidéo .<br/> Conçu pour offrir une vaste collection de jeux disponibles pour divers types de plateformes et genres  il permet aux utilisateurs d'accéder <br/>
                            facilement à des titres populaires ainsi qu'à des jeux indépendants sans frais.
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
                            XDGAME
                        </Chip>
                        <br/>
                        <br/>
                        <Image
                            alt="NextUI hero Image"
                            src={XDgame}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <Button href="/More" radius="full" className=" bg-black text-white shadow-lg font-semibold hover:bg-gray-300 hover:text-black">
                    Show More <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                </Button>
            </div>

        </div>
    );
}

export default Exeemple;
