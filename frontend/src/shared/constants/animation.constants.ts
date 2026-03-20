import type {Transition, Variants} from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

export const BASE_TRANSITION: Transition = {
    duration: 0.8,
    ease: EASE,
}

export const VIEWPORT_ONCE = {once: true, amount: 0.3} as const

export const fadeUp: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0},
}

export const fadeIn: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

export const scaleReveal: Variants = {
    hidden: {opacity: 0, scale: 0.85},
    visible: {opacity: 1, scale: 1},
}

export const slideFromLeft: Variants = {
    hidden: {opacity: 0, x: -60},
    visible: {opacity: 1, x: 0},
}

export const slideFromRight: Variants = {
    hidden: {opacity: 0, x: 60},
    visible: {opacity: 1, x: 0},
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.15, delayChildren: 0.1},
    },
}

export const heroStaggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2, delayChildren: 0.4},
    },
}
