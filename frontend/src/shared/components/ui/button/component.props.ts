import type {ComponentProps} from 'react'
import type {TypeBaseAppearance, TypeBaseSize} from "@/shared/types/appearance.types";


export interface ButtonProps extends ComponentProps<'button'> {
    /**
     * Состояние загрузки
     *
     * @remarks
     * Когда включено, кнопка становится неактивной и может отображать индикатор загрузки
     *
     * @default false
     */
    isLoading?: boolean

    /**
     * Размер кнопки
     *
     * @remarks
     * Определяет размер кнопки из предопределенного набора значений
     *
     * @default 'md'
     */
    size?: TypeBaseSize

    /**
     * Цветовое оформление кнопки
     *
     * @remarks
     * Определяет цветовую схему кнопки (primary, success, warning, error и т.д.)
     *
     * @default 'primary'
     */
    appearance?: TypeBaseAppearance
}
