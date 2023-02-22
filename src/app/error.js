"use client";

import { useEffect } from "react";

export default function Error({ error, reset}) {

    useEffect(() => {
        console.log("오류",error);
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h1>Something went wrong</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Try Again</button>
        </div>
    )
}