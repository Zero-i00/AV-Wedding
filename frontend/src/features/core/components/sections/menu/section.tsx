import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";


export function MenuSection({
    className,
    id = 'menu-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}