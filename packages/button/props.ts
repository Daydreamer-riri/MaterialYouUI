import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['elevated', 'filled', 'filled-tonal', 'outlined', 'text'].includes(type)
}

export type ButtonType = 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text'

export interface ButtonProps {
  type?: ButtonType
  disabled?: boolean
  color?: string
  textColor?: string
  width?: string
  onClick?: (e: Event) => void | Promise<any>
  onTouchstart?: (e: Event) => void | Promise<any>
  icon?: string
  iconFill?: boolean
  ripple?: boolean
  long?: boolean
}

export const props = {
  type: {
    type: String as PropType<ButtonType>,
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
