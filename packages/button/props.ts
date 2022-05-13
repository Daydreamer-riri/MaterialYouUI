import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
    return ['elevated', 'filled', 'filled-tonal', 'outlined', 'text'].includes(type)
}

export const props = {
    type: {
        type: String as PropType<'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text'>,
        default: 'filled',
        validator: typeValidator,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
    },
    textColor: {
        type: String,
    },
    width: {
        type: String,
    },
    onClick: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
    onTouchstart: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
    icon: {
        type: String,
    },
    iconFill: {
        type: Boolean,
        default: false,
    },
    ripple: {
        type: Boolean,
        default: true,
    },
    long: {
        type: Boolean,
        default: false,
    },
}
