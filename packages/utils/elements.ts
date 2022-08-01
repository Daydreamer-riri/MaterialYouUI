import { isNumber, isString } from './share'

// =====================
// 单位判断与转换
// =====================

// 1rem
export const isRem = (value: unknown): value is string => isString(value) && value.endsWith('rem')

// 1 || 1px
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value)

// 1%
export const isPercent = (value: unknown): value is string => isString(value) && value.endsWith('%')

// 1vw
export const isVw = (value: unknown): value is string => isString(value) && value.endsWith('vw')

// 1vh
export const isVh = (value: unknown): value is string => isString(value) && value.endsWith('vh')

// return 1
export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = window.getComputedStyle(document.documentElement).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return Number(value)
  }

  // % and other
  return 0
}

// example return 1px 1% 1vw 1vh 1rem null
export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return undefined
  }

  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value
  }

  return `${toPxNum(value)}px`
}

export function supportTouch() {
  const inBrowser = typeof window !== 'undefined'
  return inBrowser && 'ontouchstart' in window
}

export const OVERLAY_TYPES = ['modal', 'message', 'notification', 'drawer'] as const

export const getOverlay = (type: typeof OVERLAY_TYPES[number]) => {
  const popper = document.createElement('div')
  popper.setAttribute('class', `arco-overlay arco-overlay-${type}`)
  return popper
}

export const querySelector = (selectors: string, container?: Document | HTMLElement) => {
  return (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined
}

export const getElement = (
  target: string | HTMLElement | undefined,
  container?: Document | HTMLElement
): HTMLElement | undefined => {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target
    return querySelector(selector, container)
  }
  return target
}
