'use client'

import {type ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import type {TypeAlcoholResponse} from "@/features/invitation/types/alcohol.types";
import Image from "next/image";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";
import {m} from "framer-motion";
import {BASE_TRANSITION, slideFromRight, VIEWPORT_ONCE} from "@/shared/constants/animation.constants";
import {InvitationForm} from "@/features/invitation/components/elements/forms/invitation-form";


type Props = ComponentProps<'section'> & {
    alcohols: TypeAlcoholResponse[]
}

export function InvitationSectionView({
    className,
    alcohols,
    id = SECTION_CONFIG.INVITATION,
    ...rest
}: Props) {
    return (
        <section id={id} className={twMerge(`container-section flex flex-col`, className)} {...rest}>
            <m.div
                className={`self-end`}
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={BASE_TRANSITION}
            >
                <Image
                    width={420}
                    height={80}
                    alt={'Анкета'}
                    src={'/invitation/heading.webp'}
                />
            </m.div>
            <InvitationForm alcohols={alcohols} />
        </section>
    )
}
