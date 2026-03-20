import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {SECTION_CONFIG} from "@/shared/configs/pages/section.config";


export function MenuSectionView({
    className,
    id = SECTION_CONFIG.MENU,
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}
