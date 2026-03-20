'use client'

import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";
import {m} from "framer-motion";
import {BASE_TRANSITION, fadeUp, slideFromRight, VIEWPORT_ONCE} from "@/shared/constants/animation.constants";

export function PlanSectionView({
    className,
    id = SECTION_CONFIG.PLAN,
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(`container-section`, className)} {...rest}>
            <div className="relative flex flex-col">
                {/* heading — сверху справа */}
                <m.div
                    className="self-end"
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    transition={BASE_TRANSITION}
                >
                    <Image
                        width={937}
                        height={687}
                        alt="План дня"
                        src="/plan/heading.webp"
                        className="w-64 h-auto"
                    />
                </m.div>

                {/* time-plan — снизу слева */}
                <m.div
                    className="relative w-full h-[540px]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    transition={{...BASE_TRANSITION, delay: 0.2}}
                >
                    <Image
                        fill
                        alt="Расписание дня"
                        src="/plan/time-plan.webp"
                        sizes="50vw"
                        className="object-contain"
                    />
                </m.div>
            </div>
        </section>
    );
}
