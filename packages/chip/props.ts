import type { PropType } from 'vue'
import { pickProps } from '../utils/components'
import { props as iconProps } from '../icon/props'

function typeValidator(type: string): boolean {
    return ['assist', 'filter', 'input', 'suggestion'].includes(type)
}

export const props = {
    modelValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<any>,
        default: false,
    },
    checkedValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<any>,
        default: true,
    },
    type: {
        type: String,
        default: 'assist',
        validator: typeValidator,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    closable: {
        type: Boolean,
        default: false,
    },
    elevated: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    icon: pickProps(iconProps, 'name'),
    onClose: {
        type: Function as PropType<(e: Event) => void>,
    },
    onClick: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
    onTouchstart: {
        type: Function as PropType<(e: Event) => void | Promise<any>>,
    },
    onChange: {
        type: Function as PropType<(value: Array<any>) => void>,
    },
    'onUpdate:modelValue': {
        type: Function as PropType<(value: Array<any>) => void>,
    },
}
