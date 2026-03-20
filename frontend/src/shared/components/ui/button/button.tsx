'use client'

import styles from './button.module.css'
import type {ButtonProps} from './button.props'
import cn from 'clsx'
import type {MouseEvent} from 'react'
import {useRipple} from "@/shared/hooks/animation";
import {Loader} from "@/shared/components/ui/loader";


/**
 * Универсальный компонент кнопки с поддержкой различных стилей, размеров и состояний
 *
 * @description
 * Компонент Button предоставляет гибкую систему стилизации через комбинацию параметров:
 * - **variant** - стиль оформления (заливка, контур, текст, метка)
 * - **appearance** - цветовая схема (primary, secondary, info, success, warning, error)
 * - **size** - размер кнопки (sm, md, lg, xl)
 *
 * Поддерживает состояния загрузки и отключения, а также интерактивный ripple-эффект при клике.
 *
 * @param {ButtonProps} props - Свойства компонента
 * @param {ReactNode} props.children - Содержимое кнопки (текст, иконки и т.д.)
 * @param {string} [props.className] - Дополнительные CSS классы
 * @param {Function} [props.onClick] - Обработчик события клика
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Размер кнопки
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - HTML тип кнопки
 * @param {'default' | 'label' | 'outline' | 'text' | 'icon'} [props.variant='default'] - Вариант стиля
 * @param {'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'} [props.appearance='primary'] - Цветовое оформление
 * @param {boolean} [props.disabled=false] - Флаг отключенного состояния
 * @param {boolean} [props.isLoading=false] - Флаг состояния загрузки (показывает Loader)
 *
 */
export function Button({
   children,
   className,
   onClick,
   size = 'md',
   type = 'button',
   variant = 'default',
   appearance = 'primary',
   disabled = false,
   isLoading = false,
   ...rest
}: ButtonProps) {
    const { ripples, handleRippleClick, duration } = useRipple()

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        handleRippleClick(e)
        onClick?.(e)
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            aria-disabled={disabled}
            disabled={disabled || isLoading}
            className={cn(
                styles.btn,
                styles[`btn--${size}`],
                styles[`btn--${variant}`],
                styles[`btn--${appearance}`],
                className
            )}
            {...rest}
        >
		<span className={styles.content}>
			{isLoading ? (
                    <Loader className={styles.btn__loader} size={size} />
                ) : (
                    children
                )}
		</span>
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className={styles.btn__ripple}
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        width: `${ripple.size}px`,
                        height: `${ripple.size}px`,
                        animationDuration: `${duration}ms`
                    }}
                />
            ))}
        </button>
    )
}
