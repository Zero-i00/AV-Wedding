import type {ComponentProps} from 'react'
import type {TypeBaseAppearance, TypeBaseSize} from "@/shared/types/appearance.types";

type RadioElement = Omit<ComponentProps<'input'>, 'size'>

/**
 * Свойства компонента Radio
 */
export interface RadioProps extends RadioElement {
    /**
     * Текстовая метка радио-кнопки
     *
     * @remarks
     * Отображается справа от радио-кнопки. При клике на метку радио-кнопка выбирается.
     */
    label?: string

    /**
     * Состояние радио-кнопки (выбрана/не выбрана)
     *
     * @remarks
     * Используйте этот проп для контролируемого компонента.
     * Для неконтролируемого используйте стандартный HTML атрибут defaultChecked.
     *
     * @default false
     */
    isChecked?: boolean

    /**
     * Цветовое оформление радио-кнопки
     *
     * @remarks
     * Определяет цвет радио-кнопки в выбранном состоянии
     *
     * @default 'primary'
     */
    appearance?: TypeBaseAppearance

    /**
     * Состояние ошибки
     *
     * @remarks
     * При true радио-кнопка отображается с красной обводкой
     *
     * @default false
     */
    error?: boolean

    /**
     * Вспомогательный текст под радио-кнопкой
     *
     * @remarks
     * Обычно используется для отображения ошибок валидации или подсказок
     */
    hint?: string

    /**
     * Размер radio
     *
     * @remarks
     * Определяет размер radio из предопределенного набора значений
     *
     * @default 'sm'
     */
    size?: TypeBaseSize
}
