import type { PropType } from 'vue'

export type IconSize = 'small' | 'medium' | 'large'

export type PropIconSize = IconSize | string | number

export const props = {
    name: {
        type: String,
    },
    type: {
        type: String,
        default: 'outlined',
    },
    size: {
        type: [Number, String] as PropType<PropIconSize>,
        default: 'medium',
    },
    stokeWidth: {
        type: [Number, String],
    },
    color: {
        type: String,
    },
    fill: {
        type: Boolean,
        default: false,
    },
    namespace: {
        type: String,
    },
    transition: {
        type: [Number, String],
        default: 0,
    },
    onClick: {
        type: Function as PropType<(event: Event) => void>,
    },
}
