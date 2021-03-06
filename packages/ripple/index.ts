import { App, Directive, Plugin } from 'vue'
import type { DirectiveBinding } from '@vue/runtime-core'
import { createNamespace } from '../utils/components'
import { supportTouch } from '../utils/elements'
import context from '../context'
import './ripple.scss'
// import '../styles/common.scss'

const { n } = createNamespace('ripple')

const canTouch = supportTouch()

// ripple 类型
interface RippleStyles {
    x: number
    y: number
    centerX: number
    centerY: number
    size: number
}

interface RippleOptions {
    removeRipple: any
    touchmoveForbid: boolean
    color?: string
    disabled?: boolean
    unbounded?: boolean
    // ?
    tasker?: number | null
}

export interface RippleHTMLElement extends HTMLElement {
    _ripple?: RippleOptions
}

const ANIMATION_DURATION = 300

// ===============
// 设置基础样式
// ===============
function setStyles(element: RippleHTMLElement) {
    const { zIndex, position } = window.getComputedStyle(element)

    if (!element._ripple.unbounded) {
        element.style.overflow = 'hidden'
    }
    // ?
    // element.style.overflowX = 'hidden'
    // element.style.overflowY = 'hidden'
    position === 'static' && (element.style.position = 'relative')
    zIndex === 'auto' && (element.style.zIndex = '1')
}

// =======================
// 计算 ripple style
// =======================
function computeRippleStyles(element: RippleHTMLElement, event: any): RippleStyles {
    const { top, left }: DOMRect = element.getBoundingClientRect()
    const { clientWidth, clientHeight } = element

    const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
    const size: number = radius * 2

    const localX: number = canTouch ? event.touches[0].clientX - left : event.clientX - left
    const localY: number = canTouch ? event.touches[0].clientY - top : event.clientY - top

    const centerX: number = (clientWidth - radius * 2) / 2
    const centerY: number = (clientHeight - radius * 2) / 2

    const x: number = localX - radius
    const y: number = localY - radius

    return { x, y, centerX, centerY, size }
}

// =========================
// 生成 ripple 并挂载到目标上
// =========================
function createRipple(this: RippleHTMLElement, event: any) {
    const _ripple = this._ripple as RippleOptions
    _ripple.removeRipple()

    if (_ripple.disabled || _ripple.tasker) {
        return
    }

    const task = () => {
        _ripple.tasker = null

        const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(this, event)
        const ripple: RippleHTMLElement = document.createElement('div')
        ripple.classList.add(n())
        ripple.style.opacity = '0'
        ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.4, .4, .4)`
        ripple.style.width = `${size}px`
        ripple.style.height = `${size}px`
        _ripple.color && (ripple.style.backgroundColor = _ripple.color)
        ripple.style.boxShadow = `0 0 ${size / 5}px ${size / 10}px ${_ripple.color ?? ''}`
        // 记录生成时间
        ripple.dataset.createdAt = String(performance.now())

        setStyles(this)

        this.appendChild(ripple)

        window.setTimeout(() => {
            ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
            ripple.style.transition = `transform 0.2s var(--ripple-cubic-bezier), opacity 0.3s ease-out`
            ripple.style.opacity = `.12`
        }, 20)

        // window.setTimeout(() => {
        //     ripple.style.boxShadow = `0 0 0 0 ${_ripple.color ?? ''}`
        // }, 200)
    }

    _ripple.tasker = window.setTimeout(task, 60)
}

function removeRipple(this: RippleHTMLElement) {
    const _ripple = this._ripple as RippleOptions

    const task = () => {
        // ripples 列表
        const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(`.${n()}`)
        if (!ripples.length) {
            return
        }

        const lastRipple: RippleHTMLElement = ripples[ripples.length - 1]
        const delay: number = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt)

        setTimeout(() => {
            // 使叠加层透明度为0
            lastRipple.style.transition = `transform 0.2s var(--ripple-cubic-bezier), opacity 0.3s ease-in`
            lastRipple.style.opacity = `0`

            // 等待动画结束后移除叠加层
            setTimeout(() => lastRipple.parentNode?.removeChild(lastRipple), ANIMATION_DURATION)
        }, delay)
    }

    _ripple.tasker ? setTimeout(task, 60) : task()
}

function forbidRippleTask(this: RippleHTMLElement) {
    const _ripple = this._ripple as RippleOptions

    // 判断是否支持 touch
    if (!supportTouch()) {
        return
    }

    if (!_ripple.touchmoveForbid) {
        return
    }

    _ripple.tasker && window.clearTimeout(_ripple.tasker)
    _ripple.tasker = null
}

// ===================
// directive 指令方法
// ===================
function mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
    el._ripple = {
        tasker: null,
        ...(binding.value ?? {}),
        touchmoveForbid: binding.value?.touchmoveForbid ?? context.touchmoveForbid,
        removeRipple: removeRipple.bind(el),
    }

    if (canTouch) {
        el.addEventListener('touchstart', createRipple, { passive: true })
        document.addEventListener('touchend', el._ripple.removeRipple, { passive: true })
    } else {
        el.addEventListener('mousedown', createRipple, { passive: true })
        document.addEventListener('mouseup', el._ripple.removeRipple, { passive: true })
    }
    el.addEventListener('touchmove', forbidRippleTask, { passive: true })
    el.addEventListener('dragstart', removeRipple, { passive: true })
    document.addEventListener('touchcancel', el._ripple.removeRipple, { passive: true })
}

function unmounted(el: RippleHTMLElement) {
    if (canTouch) {
        el.removeEventListener('touchstart', createRipple)
        document.removeEventListener('touchend', el._ripple.removeRipple)
    } else {
        el.removeEventListener('mousedown', createRipple)
        document.removeEventListener('mouseup', el._ripple.removeRipple)
    }
    el.removeEventListener('touchmove', forbidRippleTask)
    el.removeEventListener('dragstart', removeRipple)
    document.removeEventListener('touchcancel', el._ripple.removeRipple)
}

function updated(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
    el._ripple = {
        ...el._ripple,
        ...(binding.value ?? {}),
        touchmoveForbid: binding.value?.touchmoveForbid ?? context.touchmoveForbid,
        tasker: null,
    }
}

const Ripple: Directive & Plugin = {
    mounted,
    unmounted,
    updated,
    install(app: App) {
        app.directive('ripple', this)
    },
}

export const _RippleComponent = Ripple

export default Ripple
