import styles from './component.module.css'
import type {InputProps} from './component.props'
import cn from 'clsx'
import {forwardRef, type Ref} from 'react'
import {Loader} from "@/shared/components/ui/loader";


/**
 * Универсальный компонент текстового поля ввода с поддержкой различных состояний
 *
 * @description
 * Компонент Input предоставляет гибкую систему для создания полей ввода с поддержкой:
 * - Состояний валидации (error, success)
 * - Иконок слева и справа от поля
 * - Состояния загрузки с индикатором
 *
 * @param {InputProps} props - Свойства компонента
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Размер поля ввода
 * @param {string} [props.placeholder] - Текст placeholder
 * @param {boolean} [props.required=false] - Обязательное поле (добавляет * к placeholder)
 * @param {boolean} [props.disabled=false] - Отключенное состояние
 * @param {string} [props.error] - Текст ошибки валидации
 * @param {string} [props.success] - Текст успешной валидации
 * @param {string} [props.hint] - Подсказка под полем
 * @param {boolean} [props.isLoading=false] - Состояние загрузки
 * @param {ReactNode} [props.leftIcon] - Иконка слева
 * @param {ReactNode} [props.rightIcon] - Иконка справа
 * @param {Ref<HTMLInputElement>} ref - React ref для доступа к DOM элементу input
 *
 * @example
 * <Input
 *   type="email"
 *   placeholder="Email"
 *   required
 * />
 */
function InputInner(
    {
        id,
        type,
        hint,
        error,
        label,
        success,
        container,
        className,
        placeholder,
        LeftComponent,
        RightComponent,
        size = 'sm',
        disabled = false,
        required = false,
        isLoading = false,
        ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
) {

    return (
        <div {...container} className={cn(styles.container, container?.className)}>
            {label && (
                <p className={styles.input__label}>{label}</p>
            )}
            <div
                className={cn(
                    styles.input__wrapper,
                    styles[`input__wrapper--${size}`],
                    error && styles['input__wrapper--error'],
                    success && styles['input__wrapper--success']
                )}
            >
                {LeftComponent}
                <input
                    id={id}
                    ref={ref}
                    type={type}
                    aria-label={label}
                    required={required}
                    aria-invalid={!!error}
                    aria-describedby={hint}
                    aria-disabled={disabled}
                    disabled={disabled || isLoading}
                    data-success={!!success}
                    className={cn(styles.input, className)}
                    placeholder={required ? `${placeholder} *` : placeholder}
                    {...rest}
                />
                {isLoading && <Loader size={'sm'} />}
                {!isLoading && RightComponent}
            </div>
            {hint && <p className={styles.input__hint}>{hint}</p>}
            {error && <p className={styles.input__error}>{error}</p>}
            {success && <p className={styles.input__success}>{success}</p>}
        </div>
    )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputInner)
Input.displayName = 'Input'
