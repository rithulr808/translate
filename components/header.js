import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import 'tailwindcss/tailwind.css'

export default function Header() {


    return (
        <div className="flex bg-stone-100 flex-row justify-between px-12 py-4">
            <div className="flex-initial font-mono px-1 text-3xl my-auto font-bold text-black">
                title
            </div>
            <div className="my-auto">
                <Button className="rounded-md text-gray-900 px-2 font-semibold" size="medium">Home</Button>
                <Button className="rounded-md text-gray-900 px-2 font-semibold" size="medium">Work</Button>
            </div>
        </div>
    )
}
