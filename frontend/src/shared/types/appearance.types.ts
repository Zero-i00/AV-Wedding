

/**
 * Базовые варианты оформления
 */
export const BASE_APPEARANCES = [
    'primary',
    'info',
    'success',
    'warning',
    'error',
] as const
export type TypeBaseAppearance = (typeof BASE_APPEARANCES)[number]

/**
 * Базовые варианты размеров
 */
export const BASE_SIZES = ['sm', 'md', 'lg', 'xl'] as const
export type TypeBaseSize = (typeof BASE_SIZES)[number]
