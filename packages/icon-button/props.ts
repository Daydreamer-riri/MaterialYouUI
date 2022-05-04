import type { PropType } from 'vue'
import { PropIconSize } from '../icon/props'

export const props = {
    name: {
        type: String,
    },
    fill: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
    },
    backgroundColor: {
        type: String,
    },
    size: {
        type: [Number, String] as PropType<PropIconSize>,
        default: 'medium',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    ripple: {
        type: Boolean,
        default: true,
    },
    onClick: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
    onTouchstart: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
}
