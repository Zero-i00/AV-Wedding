'use client'

import {Loader} from "@/shared/components/ui/loader";

export default function Loading() {
    return (
        <div className={`w-screen h-dvh flex justify-center items-center`}>
            <Loader appearance={'success'} />
        </div>
    )
}