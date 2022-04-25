import { isArray, isNumber, isString } from '../utils/share'
import type { PropType } from 'vue'

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

export type SpaceInternalSize = 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]

export const internalSizeValidator = (size: any) => ['small', 'normal', 'large'].includes(size)

export const sizeValidator = (size: any): boolean => {
    return internalSizeValidator(size) || isArray(size) || isNumber(size) || isString(size)
}

const justifyValidator = (justify: string): boolean => {
    return ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(justify)
}

export const props = {
    align: {
        type: String as PropType<SpaceAlign>,
    },
    size: {
        type: [String, Number, Array] as PropType<SpaceSize>,
        default: 'normal',
        validator: sizeValidator,
    },
    wrap: {
        type: Boolean,
        default: true,
    },
    direction: {
        type: String as PropType<SpaceDirection>,
        default: 'row',
    },
    justify: {
        type: String as PropType<SpaceJustify>,
        default: 'start',
        validator: justifyValidator,
    },
    inline: {
        type: Boolean,
        default: false,
    },
}
