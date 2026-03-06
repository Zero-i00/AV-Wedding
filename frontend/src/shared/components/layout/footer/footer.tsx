import type {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {Typography} from "@/shared/components/ui/typography";
import Image from "next/image";
import Link from "next/link";


export function Footer({className, ...rest}: ComponentProps<'footer'>) {
    return (
        <footer className={twMerge(`container-section flex flex-col justify-center items-center gap-4`, className)} {...rest}>
            <div className={`flex flex-row justify-center items-center gap-4`}>
                <Link href={'https://t.me/Zero_i00'} target={'_blank'}>
                    <Image
                        width={55}
                        height={55}
                        alt={'Telegram Артём'}
                        aria-label={'Telegram Артём'}
                        src={'/footer/tg-icon-dark.svg'}
                    />
                </Link>
                <Link href={'https://t.me/varrrenie'} target={'_blank'}>
                    <Image
                        width={55}
                        height={55}
                        alt={'Telegram Варвара'}
                        aria-label={'Telegram Варвара'}
                        src={'/footer/tg-icon-light.svg'}
                    />
                </Link>
            </div>
            <Typography variant={'overline'}>
                © Артем & Варвара
            </Typography>
        </footer>
    )
}