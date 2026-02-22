import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";


export function PlaceSection({
    className,
    id = 'place-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}