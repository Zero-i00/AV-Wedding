'use client'

import {invitationQueries} from "@/features/invitation/queries/invitation.queries";
import {type ComponentProps, useTransition} from "react";
import {twMerge} from "tailwind-merge";
import {useMutation, useSuspenseQuery} from "@tanstack/react-query";
import type {TypeInvitationRequest} from "@/features/invitation/types/invitation.types";
import type {TypeGuestRequest} from "@/features/invitation/types/guest.types";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {extractError} from "@/shared/api/api.helper";
import Image from "next/image";
import {Typography} from "@/shared/components/ui/typography";
import {Radio} from "@/shared/components/ui/radio";
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";
import {REQUIRED_INPUT_ERROR} from "@/shared/constants/error.constants";
import {Checkbox} from "@/shared/components/ui/checkbox";
import {Plus, Trash} from "lucide-react";
import {ICON_SIZE} from "@/shared/constants/styles.constants";
import {alcoholQueries} from "@/features/invitation/queries/alcohol.queries";


type FormData = {
    invitation: TypeInvitationRequest,
    guests: TypeGuestRequest[],
    alcohol_categories: number[]
}

export function InvitationSectionView({
    className,
    id = 'invitation-section',
    ...rest
}: ComponentProps<'section'>) {

    const [isMounting, startTransition] = useTransition()
    const {mutate, isPending} = useMutation(invitationQueries.create())

    const {data: alcoholCategories} = useSuspenseQuery(alcoholQueries.list())

    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
    } = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            guests: [
                {full_name: ''}
            ],
            invitation: {
                will_attend: true,
                is_single_visit: false,
                favorite_music: '',
            },
            alcohol_categories: []
        }
    })

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'guests'
    })

    const alcoholValues = watch('alcohol_categories')
    const guests = watch('guests')
    const isSingleVisit = watch('invitation.is_single_visit')

    const toggleAlcohol = (categoryId: number) => {
        const next = alcoholValues.includes(categoryId)
            ? alcoholValues.filter(c => c !== categoryId)
            : [...alcoholValues, categoryId]
        setValue('alcohol_categories', next)
    }

    const submit = (data: FormData) => {
        mutate(data, {
            onSuccess: () => {
                startTransition(() => {
                    reset()
                    toast.success('Анкета отправлена!')
                })
            },
            onError: (error) => {
                extractError(error).map(message => toast.error(message))
            }
        })
    }

    return (
        <section id={id} className={twMerge(`container-section flex flex-col`, className)} {...rest}>
            <Image
                width={420}
                height={80}
                alt={'Анкета'}
                aria-label={'Анкета'}
                src={'/invitation/heading.webp'}
                className={`self-end`}
            />
            <form
                onSubmit={handleSubmit(submit)}
                className={`self-center flex flex-col gap-4 min-w-1/3`}
            >
                <Controller
                    control={control}
                    rules={{required: REQUIRED_INPUT_ERROR}}
                    name={'guests.0.full_name'}
                    render={({field, fieldState: {error}}) => (
                        <Input
                            required
                            label={'ФИО'}
                            value={field.value}
                            error={error?.message}
                            placeholder={'Иван Иванович Иванов'}
                            onChange={(event) => field.onChange(event.target.value)}
                        />
                    )}
                />
                <Controller
                    name={'invitation.will_attend'}
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <div className={`flex flex-col gap-4 justify-start items-start`}>
                            <Typography variant={'subtitle-1'} className={`my-2!`}>
                                Планируете ли Вы присутствовать на свадьбе ?
                            </Typography>
                            <Radio
                                size={'md'}
                                error={!!error?.message}
                                label={'Да, с удовольствием'}
                                isChecked={Boolean(field.value)}
                                onClick={() => field.onChange(true)}
                            />
                            <Radio
                                size={'md'}
                                error={!!error?.message}
                                isChecked={!field.value}
                                label={'К сожалению, не смогу'}
                                onClick={() => field.onChange(false)}
                            />
                            {error?.message && (
                                <Typography variant={'caption'} className={`text-red-500`}>
                                    {error.message}
                                </Typography>
                            )}
                        </div>
                    )}
                />
                <div className={`flex flex-col gap-4 justify-start items-start`}>
                    <Typography variant={'subtitle-1'} className={`my-2!`}>
                        Будет ли с Вами кто-то ещё
                    </Typography>

                    <div className={`flex flex-row justify-start items-center gap-2`}>
                        <Button
                            size={'sm'}
                            disabled={isSingleVisit}
                            className={`aspect-square! p-1! bg-white! border-[2px]!`}
                            onClick={() => append({full_name: ''})}
                        >
                            <Plus size={ICON_SIZE.SM} color={'var(--color-primary-500)'} />
                        </Button>
                        <Typography variant={'subtitle-1'}>
                            Да (вторая половина / ребёнок)
                        </Typography>
                    </div>
                    {fields.slice(1).map((field, index) => (
                        <Controller
                            key={field.id}
                            rules={{required: REQUIRED_INPUT_ERROR}}
                            name={`guests.${index + 1}.full_name`}
                            control={control}
                            render={({field, fieldState: {error}}) => (
                                <div className={`w-full flex flex-row justify-start items-center gap-2`}>
                                    <Button variant={'icon'} onClick={() => remove(index)}>
                                        <Trash size={ICON_SIZE.SM} color={'var(--color-gray-500)'}/>
                                    </Button>
                                    <Input
                                        required
                                        placeholder={'ФИО'}
                                        value={field.value}
                                        error={error?.message}
                                        onChange={(event) => field.onChange(event.target.value)}
                                    />
                                </div>
                            )}
                        />
                    ))}

                    <Controller
                        name={'invitation.is_single_visit'}
                        control={control}
                        render={({field, fieldState: {error}}) => (
                            <Checkbox
                                size={'md'}
                                label={'Нет'}
                                hint={error?.message}
                                error={!!error?.message}
                                isChecked={Boolean(field.value)}
                                onClick={() => field.onChange(!field.value)}
                                disabled={guests.length > 1}
                            />
                        )}
                    />
                </div>
                <div className={`flex flex-col gap-4 justify-start items-start`}>
                    <Typography variant={'subtitle-1'} className={`my-2!`}>
                        Уточните Ваши предпочтения в алкоголе:
                    </Typography>
                    {alcoholCategories.length === 0 ? (
                        <Typography variant={'subtitle-1'}>
                            Пока нет категорий на выбор
                        </Typography>
                    ) : (
                        <div className={`grid grid-cols-2 grid-rows-4 gap-2`}>
                            {alcoholCategories.map(category => (
                                <Checkbox
                                    key={category.id}
                                    size={'md'}
                                    label={category.title}
                                    isChecked={alcoholValues.includes(category.id)}
                                    onClick={() => toggleAlcohol(category.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <Controller
                    name={'invitation.favorite_music'}
                    control={control}
                    render={({field, fieldState: {error}}) => (
                        <Input
                            label={'Оставьте свой любимый музыкальный трек для дискотеки'}
                            value={field.value}
                            error={error?.message}
                            placeholder={'Bruno Mars - Just The Way You Are'}
                            onChange={(event) => field.onChange(event.target.value)}
                        />
                    )}
                />
                <Button
                    size={'md'}
                    type={'submit'}
                    isLoading={isMounting || isPending}
                    className={`w-2/3 self-center`}
                >
                    Отправить!
                </Button>
            </form>
        </section>
    )
}
