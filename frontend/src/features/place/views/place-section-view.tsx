'use client'

import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import {Typography} from "@/shared/components/ui/typography";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";
import {m} from "framer-motion";
import {
    BASE_TRANSITION,
    slideFromLeft,
    slideFromRight,
    VIEWPORT_ONCE,
} from "@/shared/constants/animation.constants";


export function PlaceSectionView({
    className,
    id = SECTION_CONFIG.PLACE,
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section flex flex-col justify-between items-start gap-4`, className)} {...rest}>
            <m.div
                className={`self-end`}
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={BASE_TRANSITION}
            >
                <Image
                    width={680}
                    height={200}
                    alt={'Место проведения'}
                    src={'/place/heading.webp'}
                />
            </m.div>
            <m.div
                className={`flex flex-col`}
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={BASE_TRANSITION}
            >
                <Typography variant={'body-1'}>
                    Банкетный зал
                </Typography>
                <Typography variant={'h1'}>
                    Elka Event Hall
                </Typography>
                <Typography variant={'subtitle-1'} style={{marginTop: 12}}>
                    По адресу: Свердловская обл., пос. Хрустальная,<br/>
                    ул. Трактовая, д.31  (ориентир)
                </Typography>
            </m.div>
        </section>
    )
}
