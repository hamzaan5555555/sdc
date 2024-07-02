"use client";
import React from 'react';
import { Badge } from "@nextui-org/react";

function Project() {
    return (
        <div className="mt-[50px] ml-7">
            <div className="flex items-center">
                <Badge
                    content=""

                    shape="circle"
                    placement="bottom-right"
                    className="w-4 h-4 mr-2 bg-cyan-400"
                />
                <h1 className="font-semibold  text-4xl ml-7">Recent projects</h1>
            </div>

        </div>
    );
}

export default Project;
