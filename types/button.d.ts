import { MyComponent } from './myComponent'

export interface ButtonProps {
    type?: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text'
    disabled?: boolean
    textColor?: string
    color?: string
    width?: string
    onClick?: (e: Event) => void
    onTouchstart?: (e: Event) => void
}

export class Button extends MyComponent {
    $props: ButtonProps
}

export class _ButtonComponent extends Button {}
