import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export function HeroSection({
    className,
    id = 'hero-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}
