import styles from './component.module.css'
import type {CheckboxProps} from './component.props'
import cn from 'clsx'
import {Check} from 'lucide-react'
import {forwardRef, type Ref} from 'react'

/**
 * Универсальный компонент чекбокса с поддержкой различных цветовых схем
 *
 * @description
 * Компонент Checkbox предоставляет гибкую систему стилизации в стиле Material-UI.
 * Поддерживает:
 * - Различные цветовые схемы через appearance (primary, secondary, info, success, warning, error)
 * - Состояния: обычное, выбранное, отключенное, ошибка
 * - Ripple-эффект при клике
 * - Label и вспомогательный текст
 * - Полная поддержка accessibility (ARIA атрибуты, клавиатурная навигация)
 *
 * @param {CheckboxProps} props - Свойства компонента
 * @param {Ref<HTMLInputElement>} ref - React ref для доступа к DOM элементу input
 * @param {string} [props.label] - Текстовая метка чекбокса
 * @param {boolean} [props.isChecked=false] - Состояние чекбокса (контролируемый режим)
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='sm'] - Размер checkbox
 * @param {'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'} [props.appearance='primary'] - Цветовое оформление
 * @param {boolean} [props.error=false] - Состояние ошибки
 * @param {string} [props.hint] - Вспомогательный текст
 * @param {boolean} [props.disabled=false] - Отключенное состояние
 * @param {string} [props.className] - Дополнительные CSS классы
 *
 * @example
 * <Checkbox
 *   label="Я согласен с условиями"
 *   appearance="primary"
 *   onChange={(e) => console.log(e.target.checked)}
 * />
 */
function CheckboxInner(
    {
        id,
        label,
        hint,
        className,
        onChange,
        size = 'sm',
        error = false,
        disabled = false,
        isChecked = false,
        appearance = 'primary',
        ...rest
    }: CheckboxProps,
    ref: Ref<HTMLInputElement>
) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <label
                htmlFor={id}
                className={cn(
                    styles.label,
                    styles[`label--${size}`],
                    disabled && styles['label--disabled'],
                    error && styles['label--error']
                )}
            >
				<span className={styles.container}>
					<input
                        ref={ref}
                        id={id}
                        type='checkbox'
                        checked={isChecked}
                        disabled={disabled}
                        onChange={onChange}
                        readOnly={!onChange}
                        className={styles.input}
                        aria-checked={isChecked}
                        aria-invalid={error}
                        aria-disabled={disabled}
                        {...rest}
                    />
					<span
                        className={cn(
                            styles.checkbox,
                            styles[`checkbox--${size}`],
                            styles[`checkbox--${appearance}`],
                            isChecked && styles['checkbox--checked'],
                            disabled && styles['checkbox--disabled'],
                            error && styles['checkbox--error']
                        )}
                    >
						{isChecked && <Check className={styles.icon} strokeWidth={3} />}
					</span>
				</span>
                {label && <span className={styles['label-text']}>{label}</span>}
            </label>
            {hint && (
                <span className={cn(styles.hint, error && styles['hint--error'])}>
					{hint}
				</span>
            )}
        </div>
    )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    CheckboxInner
)
Checkbox.displayName = 'Checkbox'
