'use client'

import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import {Typography} from "@/shared/components/ui/typography";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";
import {m} from "framer-motion";
import {BASE_TRANSITION, fadeUp, slideFromRight, VIEWPORT_ONCE,} from "@/shared/constants/animation.constants";
import {formatGuests} from "@/shared/utils/format-guests";

interface MenuSectionViewProps extends ComponentProps<'section'> {
    guests?: string[]
}

export function MenuSectionView({
    className,
    id = SECTION_CONFIG.MENU,
    guests,
    ...rest
}: MenuSectionViewProps) {
    return (
        <section id={id} className={twMerge(
            `container-section flex flex-col md:flex-row items-start gap-24`,
            className
        )} {...rest}>
            {/* Левая часть — картинка */}
            <div className="w-fit shrink-0">
                <Image
                    width={460}
                    height={420}
                    alt={'Сервировка стола'}
                    src={'/menu/menu-table.webp'}
                    className="w-full h-auto"
                />
            </div>

            {/* Правая часть — заголовок + текст */}
            <div className="flex-1 flex flex-col gap-6">
                <m.div
                    className="self-end"
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    transition={BASE_TRANSITION}
                >
                    <Image
                        width={680}
                        height={200}
                        alt={'Меню'}
                        src={'/menu/heading.webp'}
                    />
                </m.div>

                <m.div
                    className="flex flex-col w-1/3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    transition={{...BASE_TRANSITION, delay: 0.2}}
                >
                    {guests && guests.length > 0 && (
                        <div>
                            <Typography variant="h4">
                                {formatGuests(guests)}!
                            </Typography>
                            <br />
                        </div>
                    )}
                    <Typography variant="h4">
                        Один день в этом году будет
                        для нас особенным, и мы хотим провести
                        его в кругу близких и друзей.
                        <br />
                        <br />
                        С огромной радостью приглашаем Вас
                        на главное событие в нашей жизни -
                        нашу свадьбу!
                    </Typography>
                </m.div>
            </div>
        </section>
    )
}
