import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";


export function MenuSectionView({
    className,
    id = 'menu-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}
