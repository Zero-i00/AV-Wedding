import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {Typography} from "@/shared/components/ui/typography";
import Image from "next/image";


const VARVARA_LINE_PATH = "M1097 92.9266C906.67 71.4517 687.076 147.514 657.121 116.611C619.675 77.9824 709.671 -39.9098 730.188 15.8004C748.778 66.2743 613.694 103.09 549.453 92.9259C456.888 78.2809 425.131 -4.25839 302.704 15.8028C180.279 35.8641 137.35 104.95 0.00390625 104.394"
const ARTEM_LINE_PATH = "M1264 134.171C1066.25 134.292 965.473 27.7853 862.312 15.388C792.142 6.9554 757.688 145.807 595.585 95.1184C427.3 30.6856 320.084 85.2668 366.855 109.607C413.626 133.948 630.346 32.2878 491.965 5.48972C353.582 -21.3083 121.05 85.5963 -95 79.8217"

function VarvaraLine({className, ...rest}: ComponentProps<'div'>) {
    return (
        <div className={twMerge(`w-full flex flex-row items-end`, className)} {...rest}>
            <Image
                width={0}
                height={0}
                sizes={'100vw'}
                alt={'Варвара'}
                aria-label={'Варвара'}
                src={'/hero/varvara-heading.webp'}
                className={`w-[30%] shrink-0`}
            />
            <svg
                viewBox="0 0 1097 144"
                fill="none"
                className="flex-1 h-auto"

                xmlns="http://www.w3.org/2000/svg"
            >
                <title id="artem-line-title">Декоративная линия</title>
                <path
                    d={VARVARA_LINE_PATH}
                    stroke="black"
                    strokeWidth="2.20931"
                    pathLength="1"
                    style={{
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        animation: 'draw-line 2s ease forwards',
                    }}
                    className={`translate-y-9.5`}
                />
            </svg>
        </div>
    )
}


function ArtemLine({className, ...rest}: ComponentProps<'div'>) {
    return (
        <div className={twMerge(`w-full flex flex-row items-end`, className)} {...rest}>
            <svg
                viewBox="0 0 1264 136"
                fill="none"
                className="flex-1 h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title id="artem-line-title">Декоративная линия</title>
                <path
                    d={ARTEM_LINE_PATH}
                    stroke="black"
                    strokeWidth="2.34188"
                    pathLength="1"
                    style={{
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        animation: 'draw-line 2s ease forwards',
                    }}
                />
            </svg>
            <Image
                width={0}
                height={0}
                alt={'Артём'}
                sizes={'100vw'}
                aria-label={'Артём'}
                src={'/hero/artem-heading.webp'}
                className={`w-[23%] shrink-0`}
            />
        </div>
    )
}

function Heading({className, ...rest}: ComponentProps<'div'>) {
    return (
        <div className={twMerge(`flex flex-col justify-center items-center gap-2`, className)} {...rest}>
            <Image
                width={260}
                height={60}
                alt={'Артём'}
                aria-label={'Артём'}
                src={'/hero/artem-heading.webp'}
            />
            <Typography variant={'h1'} style={{fontWeight: 200}}>
                &
            </Typography>
            <Image
                width={340}
                height={60}
                alt={'Варвара'}
                aria-label={'Варвара'}
                src={'/hero/varvara-heading.webp'}
            />
        </div>
    )
}

export function HeroSection({
    className,
    id = 'hero-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section h-dvh flex flex-col justify-center gap-6`, className)} {...rest}>
            <VarvaraLine className={`justify-start`} />
            <div className={`flex flex-col justify-center items-center gap-12`}>
                <Image
                    width={90}
                    height={90}
                    alt={'Кольца'}
                    aria-label={'Кольца'}
                    src={'/hero/rings.webp'}
                />
                <Typography variant={'h5'} style={{fontWeight: 300, textAlign: 'center'}}>
                    приглашаем на свадьбу
                </Typography>
                <Heading />
                <Typography variant={'h3'} style={{fontWeight: 300}}>
                    28/08/2026
                </Typography>
            </div>
            <ArtemLine className={`justify-end`} />
        </section>
    )
}
