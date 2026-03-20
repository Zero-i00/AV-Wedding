'use client'

import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";

export function PlanSectionView({
    className,
    id = SECTION_CONFIG.PLAN,
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section flex justify-center`, className)} {...rest}>
        </section>
    );
}
