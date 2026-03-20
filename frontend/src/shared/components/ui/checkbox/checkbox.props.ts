import type {ComponentProps} from 'react'
import type {TypeBaseAppearance, TypeBaseSize} from "@/shared/types/appearance.types";

type CheckboxElement = Omit<ComponentProps<'input'>, 'size' | 'checked'>

/**
 * Свойства компонента Checkbox
 */
export interface CheckboxProps extends CheckboxElement {
    /**
     * Текстовая метка чекбокса
     *
     * @remarks
     * Отображается справа от чекбокса. При клике на метку чекбокс переключается.
     */
    label?: string

    /**
     * Состояние чекбокса (выбран/не выбран)
     *
     * @remarks
     * Используйте этот проп для контролируемого компонента.
     * Для неконтролируемого используйте стандартный HTML атрибут defaultChecked.
     *
     * @default false
     */
    isChecked?: boolean

    /**
     * Цветовое оформление чекбокса
     *
     * @remarks
     * Определяет цвет чекбокса в выбранном состоянии
     *
     * @default 'primary'
     */
    appearance?: TypeBaseAppearance

    /**
     * Состояние ошибки
     *
     * @remarks
     * При true чекбокс отображается с красной обводкой
     *
     * @default false
     */
    error?: boolean

    /**
     * Вспомогательный текст под чекбоксом
     *
     * @remarks
     * Обычно используется для отображения ошибок валидации или подсказок
     */
    hint?: string

    /**
     * Размер checkbox
     *
     * @remarks
     * Определяет размер checkbox из предопределенного набора значений
     *
     * @default 'sm'
     */
    size?: TypeBaseSize
}
