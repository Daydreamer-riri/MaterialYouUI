import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['surface', 'primary', 'secondary', 'tertiary'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['small', 'medium', 'large'].includes(size)
}

export const props = {
  type: {
    type: String,
    default: 'primary',
    validator: typeValidator,
  },
  size: {
    type: String,
    default: 'medium',
    validator: sizeValidator,
  },
  extended: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
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
  onClick: {
    type: Function as PropType<(e: Event) => void | Promise<any>>,
  },
  onTouchstart: {
    type: Function as PropType<(e: Event) => void | Promise<any>>,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
}
