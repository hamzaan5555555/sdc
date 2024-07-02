"use client";
import React from 'react';
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function About() {
    const image = "./image.jpg";
    return (
        <div>
            <div className="mt-[50px] ml-7">
                <div className="flex items-center">
                    <Badge
                        content=""
                        shape="circle"
                        placement="bottom-right"
                        className="w-4 h-4 mr-2 bg-cyan-400"
                    />
                    <h1 className="font-semibold text-4xl ml-7">Skills</h1>

                </div>
                <div className="flex mt-6 ">
                    {/* Section de gauche */}
                    <div className="w-1/2  flex ml-3  ">
                        <h1 className="text-gray-500">Here, I showcase the programs I work with and the programming <br/> languages I master. From Photoshop to JavaScript, each skill<br/> contributes to the mosaic of my professional expertise.</h1>
                    </div>

                    {/* Section de droite */}
                    <div className="w-1/2 mt-6 flex flex-wrap gap-2 font-semibold ">

                        <p className="bg-gray-200 rounded-full py-3 px-4">HTML5</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">ReactJS</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">TailwindCSS</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Css</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">NextJs</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Bootstrap</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Framer-Motion</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Angular</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Git Version Control</p>
                        <p
                            className="bg-gray-200 rounded-full py-3 px-4 ml-1">JavaScript</p>
                        <p className="bg-gray-200 rounded-full py-3 px-4 ml-1">Responsive Web Design</p>



                    </div>
                </div>
            </div>
            <div className="mt-[50px] ml-7">
                <div className="flex items-center">
                    <Badge
                        content=""
                        shape="circle"
                        placement="bottom-right"
                        className="w-4 h-4 mr-2 bg-cyan-400"
                    />
                    <h1 className="font-semibold text-4xl ml-7">About</h1>

                </div>
                <div className="h-screen flex">
                    {/* Colonne de gauche */}
                    <div className="w-1/2 flex flex-col items-start">
                        <div className="flex">
                            <img src={image} className="w-20 h-20 rounded-full mt-[70px]" alt="Cercle" />
                            <h1 className="ml-4 mt-[71px] font-medium text-2xl">
                                I’m Hamza Anouar Student And freelancer<br />
                                developer crafting Digital experiences from <br />
                                Morroco.
                            </h1>
                        </div>
                        <a href="https://github.com/hamzaan5555555">
                        <Button radius="full"
                                className="bg-black text-white mt-10 ml-[200px] shadow-lg font-semibold hover:bg-white hover:text-black hover:border-black">
                            VISIT MY GITHUB <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        </Button>
                        </a>
                    </div>

                    {/* Colonne de droite */}
                    <div className="w-1/2  flex mt-[72px] text-gray-600">
                        <p>Hey there! I'm Simrann Gökhan, a freelance web developer based in Montreal. <br/>With over 5
                            years of experience, I specialize in crafting dynamic websites<br/> that leave a lasting
                            impression. My skills span HTML, CSS, JavaScript, and more,<br/> allowing me to bring your
                            digital vision to life with precision and creativity.<br/>

                            From sleek landing pages to robust e-commerce platforms, I've got you covered.<br/> I thrive
                            on
                            exceeding client expectations, whether it's building responsive designs or optimizing
                            for
                            SEO.  <br/> I take the time to understand your goals, ensuring the end product meets your
                            needs.
                        </p>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default About;
