import type {MouseEvent} from 'react'
import {useCallback, useState} from 'react'

import type {Ripple, UseRippleConfig, UseRippleReturn} from './use-ripple.types'

/**
 * Хук для создания ripple-эффекта при клике на кнопку
 *
 * @description
 * Создает волновой эффект (ripple) в месте клика пользователя.
 * Эффект автоматически исчезает через заданное время.
 * Использует React state вместо прямых манипуляций с DOM.
 *
 * @param {UseRippleConfig} config - Параметры конфигурации
 * @param {number} [config.speed=600] - Длительность эффекта в миллисекундах
 *
 * @returns {UseRippleReturn} Объект с массивом ripples и обработчиком клика
 *
 * @example
 * const { ripples, handleRippleClick, animationDuration } = useRipple({ speed: 600 })
 *
 * return (
 *   <button onClick={handleRippleClick}>
 *     <span>Кнопка</span>
 *     {ripples.map((ripple) => (
 *       <span
 *         key={ripple.id}
 *         className="ripple"
 *         style={{
 *           left: ripple.x,
 *           top: ripple.y,
 *           width: ripple.size,
 *           height: ripple.size,
 *           animationDuration: `${animationDuration}ms`
 *         }}
 *       />
 *     ))}
 *   </button>
 * )
 */
export function useRipple({
	speed = 600
}: UseRippleConfig = {}): UseRippleReturn {
	const [ripples, setRipples] = useState<Ripple[]>([])

	const handleRippleClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const button = e.currentTarget
			const rect = button.getBoundingClientRect()

			// Вычисляем размер ripple как диагональ кнопки для полного покрытия
			const size = Math.max(rect.width, rect.height) * 2

			// Вычисляем координаты клика относительно кнопки
			const x = e.clientX - rect.left - size / 2
			const y = e.clientY - rect.top - size / 2

			const newRipple: Ripple = {
				id: Date.now(),
				x,
				y,
				size
			}

			// Добавляем новый ripple в массив
			setRipples(prev => [...prev, newRipple])

			setTimeout(() => {
				setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
			}, speed)
		},
		[speed]
	)

	return {
		ripples,
		duration: speed,
		handleRippleClick
	}
}
