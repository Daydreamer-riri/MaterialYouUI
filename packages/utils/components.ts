import { isArray } from './share'

export function pickProps(props: any, propsKey: any): any {
    return Array.isArray(pickProps)
        ? propsKey.reduce((pickedProps: any, key: any) => {
              pickedProps[key] = props[key]
              return pickProps
          }, {})
        : props[propsKey]
}

type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]

export function createNamespace(name: string) {
    const namespace = `my-${name}`

    const createBEM = (suffix?: string): string => {
        if (!suffix) return namespace

        return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`
    }

    const classes = (...classes: Classes): any[] => {
        return classes.map((className) => {
            if (isArray(className)) {
                const [condition, tru, fal = null] = className
                return condition ? tru : fal
            }

            return className
        })
    }

    return {
        n: createBEM,
        classes,
    }
}

export function call<F extends (...arg: any) => any, P extends Parameters<F>>(
    fn?: F | null,
    ...arg: any[]
): ReturnType<F> | undefined {
    if (fn) return fn(...arg)
}
