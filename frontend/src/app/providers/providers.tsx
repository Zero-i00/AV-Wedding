'use client'

import type {PropsWithChildren} from "react";
import {Toaster} from "react-hot-toast";
import {MotionProvider} from "@/app/providers/motion";

export function Providers({children}: PropsWithChildren) {
    return (
        <MotionProvider>
            {children}
            <Toaster
                position={'top-center'}
            />
        </MotionProvider>
    )
}
