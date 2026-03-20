'use client'

import type {PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {MotionProvider} from "@/app/providers/motion";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export function Providers({children}: PropsWithChildren) {
    return (
        <MotionProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <Toaster
                    position={'top-center'}
                />
            </QueryClientProvider>
        </MotionProvider>
    )
}
