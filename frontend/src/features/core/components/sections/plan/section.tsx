import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";


export function PlanSection({
    className,
    id = 'plan-section',
    ...rest
}: ComponentProps<'section'>) {
    return (
        <section id={id} className={twMerge(``, className)} {...rest}>

        </section>
    )
}