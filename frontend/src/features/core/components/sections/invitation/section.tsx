'use client'

import {invitationQueries} from "@/features/core/queries/invitation.queries";
import {ComponentProps, useTransition} from "react";
import {twMerge} from "tailwind-merge";
import {useMutation} from "@tanstack/react-query";
import {TypeInvitationRequest} from "@/features/core/types/invitation.types";
import {TypeGuestRequest} from "@/features/core/types/guest.types";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {extractError} from "@/shared/api/api.helper";


type FormData = {
    invitation: TypeInvitationRequest,
    guests: TypeGuestRequest[],
    alcohol_categories: number[]
}

export function InvitationSection({
    className,
    id = 'invitation-section',
    ...rest
}: ComponentProps<'section'>) {

    const [isMounting, startTransition] = useTransition()
    const {mutate, isPending} = useMutation(invitationQueries.create())

    const {
        reset,
        control,
        handleSubmit,
    } = useForm({
        mode: 'onSubmit',
    })


    const submit = (data: FormData) => {
        mutate(data, {
            onSuccess: () => {
                startTransition(() => {
                    reset()
                })
            },
            onError: (error) => {
                extractError(error).map(message => toast.error(message))
            }
        })
    }

    return (
        <section id={id} className={twMerge(``, className)} {...rest}>
            <form>

            </form>
        </section>
    )
}