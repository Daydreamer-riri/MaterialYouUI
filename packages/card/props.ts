import { PropType } from 'vue'

function typeValidator(type: string): boolean {
    return ['elevated', 'filled', 'outlined'].includes(type)
}

export const props = {
    type: {
        type: String as PropType<'elevated' | 'filled' | 'outlined'>,
        default: 'elevated',
        validator: typeValidator,
    },
}
