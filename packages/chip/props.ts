import { PropType, defineProps } from 'vue'
import { pickProps } from '../utils/components'

function typeValidator(type: string): boolean {
    return ['assist', 'filter', 'input', 'suggestion'].includes(type)
}

export const props = {
    type: {
        type: String,
        default: 'assist',
        validator: typeValidator,
    },
    round: {
        type: Boolean,
        default: true,
    },
    closable: {
        type: Boolean,
        default: false,
    },
    elevated: {
        type: Boolean,
        default: false,
    },
    selected: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    onClose: {
        type: Function as PropType<(e: Event) => void>,
    },
}
