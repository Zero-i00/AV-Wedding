import type { MouseEvent } from 'react'

/**
 * Параметры конфигурации хука useRipple
 */
export interface UseRippleConfig {
	/**
	 * Длительность ripple-эффекта в миллисекундах
	 * @default 600
	 */
	speed?: number
}

/**
 * Интерфейс одного ripple-эффекта
 */
export interface Ripple {
	/**
	 * Уникальный идентификатор ripple
	 */
	id: number
	/**
	 * Координата X центра ripple относительно элемента
	 */
	x: number
	/**
	 * Координата Y центра ripple относительно элемента
	 */
	y: number
	/**
	 * Размер ripple (диаметр круга)
	 */
	size: number
}

/**
 * Возвращаемое значение хука useRipple
 */
export interface UseRippleReturn {
	/**
	 * Массив активных ripple-эффектов
	 */
	ripples: Ripple[]
	/**
	 * Длительность анимации в миллисекундах (для передачи в CSS)
	 */
	duration: number
	/**
	 * Обработчик клика для создания ripple-эффекта
	 */
	handleRippleClick: (e: MouseEvent<HTMLButtonElement>) => void
}
