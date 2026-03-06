import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import {Typography} from "@/shared/components/ui/typography";


export function PlaceSection({
    className,
    id = 'place-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section flex flex-col justify-between items-start gap-4`, className)} {...rest}>
            <Image
                width={420}
                height={80}
                alt={'Место проведения'}
                aria-label={'Место проведения'}
                src={'/place/heading.webp'}
                className={`self-end`}
            />
            <div className={`flex flex-col`}>
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
            </div>
        </section>
    )
}