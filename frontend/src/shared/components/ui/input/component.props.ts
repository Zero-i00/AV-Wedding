import type {ComponentProps, ReactNode} from 'react'
import type {TypeBaseSize} from "@/shared/types/appearance.types";

export type InputElement = Omit<ComponentProps<'input'>, 'size'>
/**
 * Свойства компонента Input
 */
export interface InputProps extends InputElement {
    /**
     * Размер поля ввода
     *
     * @default 'sm'
     */
    size?: TypeBaseSize

    /**
     * Подсказка под полем ввода
     */
    label?: string

    /**
     * Подсказка под полем ввода
     */
    hint?: string

    /**
     * Текст ошибки валидации
     *
     * @remarks
     * При заполнении окрашивает рамку в красный цвет
     */
    error?: string

    /**
     * Текст успешной валидации
     *
     * @remarks
     * При заполнении окрашивает рамку в зелёный цвет
     */
    success?: string

    /**
     * Состояние загрузки
     *
     * @remarks
     * Отображает loader и делает поле недоступным для ввода
     *
     * @default false
     */
    isLoading?: boolean

    /**
     * Иконка слева от поля ввода
     */
    LeftComponent?: ReactNode

    /**
     * Иконка справа от поля ввода
     */
    RightComponent?: ReactNode

    /**
     * HTML атрибуты для контейнера компонента
     */
    container?: ComponentProps<'div'>
}
