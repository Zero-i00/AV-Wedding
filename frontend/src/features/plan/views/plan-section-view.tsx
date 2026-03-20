'use client'

import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export function PlanSectionView({
    className,
    id = 'plan-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section flex justify-center`, className)} {...rest}>
        </section>
    );
}
