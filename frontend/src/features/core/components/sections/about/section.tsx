import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";


export function AboutSection({
    className,
    id = 'about-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}