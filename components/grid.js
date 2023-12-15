'use client'

import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from "./card";
import styles from "./css/Grid.module.css"
import clsx from "clsx";
import {useEffect, useState} from "react";


export default function DisplayGrid() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col px-14 p-2 py-4 my-32">
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, lg: 12 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid xs={4} sm={4} lg={4} key={index}>
                        <div className={
                            clsx([
                                "bg-stone-200 h-96 rounded-lg p-4",
                                "hover:cursor-pointer hover:opacity-0.5",
                            ])
                        }>
                        <MediaCard/>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}