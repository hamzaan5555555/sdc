"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import {Alert} from "@nextui-org/react";

import { IoArrowBack } from "react-icons/io5"; // Icône de retour

const TextWrite = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-neutral-100 w-full h-screen text-neutral-800 relative">
            {/* Icône de retour */}
            <a href="/" passHref>
                <button className="absolute top-4 left-4 flex items-center p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition">
                    <IoArrowBack size={24} className="text-neutral-800" />
                </button>
            </a>

            <BlockInTextCard
                tag="/ Support"
                text={
                    <>
                        <strong>Have questions?</strong> We'd love to help! Contact support
                        for any issue you may face.
                        <Input label="Name" placeholder="Enter your name" type="email" variant={"underlined"} /> <br />
                        <Input label="Email" placeholder="Enter your email" type="email" variant={"underlined"} /><br />
                        <Textarea label="Message for work" placeholder="Message" type="email"
                                  variant={"underlined"}></Textarea>
                    </>
                }
                examples={[
                    "How Much Will My Project Be Created?",
                    "How does seat-based pricing work?",
                    "What's the meaning of life?",
                ]}
            />
        </div>
    );
};

export default TextWrite;

const BlockInTextCard = ({ tag, text, examples }) => {
    const  [Alert,setAlert] = useState();
    const handlClick= () =>{
        setAlert(<Alert color={"success"} title={`This is a ${"success"} alert`} />)
    }
    return (
        <div className="w-full max-w-xl space-y-6">
            <div>
                <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
                <hr className="border-neutral-700" />
            </div>
            <p className="max-w-lg text-xl leading-relaxed">{text}</p>
            <div>
                <Typewrite examples={examples} />
                <hr className="border-neutral-300" />
            </div>
            <button
                onClick={handlClick}
                className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100"
            >
                Contact Me
            </button>
        </div>
    );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((pv) => (pv + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className="mb-2.5 text-sm font-light uppercase">
            <span className="inline-block size-2 bg-neutral-950" />
            <span className="ml-3">
        EXAMPLE:{" "}
                {examples[exampleIndex].split("").map((l, i) => (
                    <motion.span
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: MAIN_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                        key={`${exampleIndex}-${i}`}
                        className="relative"
                    >
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                duration: 0,
                            }}
                        >
                            {l}
                        </motion.span>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                        />
                    </motion.span>
                ))}
      </span>
        </p>
    );
};
