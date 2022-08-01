import {
  inject,
  getCurrentInstance,
  onUnmounted,
  onMounted,
  nextTick,
  computed,
  provide,
  onBeforeUnmount,
  reactive,
  isVNode,
} from 'vue'

import type { Component, VNode, ComputedRef, ComponentInternalInstance, Ref, ComponentPublicInstance } from 'vue'

import { isArray, removeItem } from './share'

// ===================
// 类型声明
// ===================

export interface ChildrenCounter {
  collect(instance: ComponentInternalInstance): void

  clear(instance: ComponentInternalInstance): void

  instances: ComponentInternalInstance[]
}

export interface BaseParentProvider<C> {
  collect(childProvider: C): void

  clear(childProvider: C): void
}

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
  const namespace = `m-${name}`

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

export function flatVNodes(subTree: any) {
  const vNodes: VNode[] = []

  const flat = (subTree: any) => {
    if (subTree?.component) {
      flat(subTree?.component.subTree)
      return
    }

    if (Array.isArray(subTree?.children)) {
      // subTree.children.foreach((child: any) => {
      //     if (isVNode(child)) {
      //         vNodes.push(child)

      //         flat(child)
      //     }
      // })
      for (const child of subTree.children) {
        if (isVNode(child)) {
          vNodes.push(child)

          flat(child)
        }
      }
    }
  }

  flat(subTree)

  return vNodes
}

// =============
// 父子通信
// =============

export function useAtChildrenCounter(key: symbol) {
  const instances: ComponentInternalInstance[] = reactive([])
  const parentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

  const sortInstances = () => {
    const vNodes: any[] = flatVNodes(parentInstance.subTree)

    instances.sort((a, b) => {
      return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode)
    })
  }

  const collect = (instance: ComponentInternalInstance) => {
    instances.push(instance)
    sortInstances()
  }

  const clear = (instance: ComponentInternalInstance) => {
    removeItem(instances, instance)
  }

  provide<ChildrenCounter>(key, {
    collect,
    clear,
    instances,
  })

  const length: ComputedRef<number> = computed(() => instances.length)

  return {
    length,
  }
}

export function useAtParentIndex(key: symbol) {
  if (!KeyInProvides(key)) {
    return { index: null }
  }

  const childrenCounter: ChildrenCounter = inject<ChildrenCounter>(key) as ChildrenCounter

  const { collect, clear, instances } = childrenCounter

  const instance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

  onMounted(() => {
    nextTick().then(() => collect(instance))
  })
  onUnmounted(() => {
    nextTick().then(() => clear(instance))
  })

  const index = computed(() => instances.indexOf(instance))

  return {
    index,
  }
}

export function useChildren<P, C>(key: symbol) {
  const childProviders: C[] = []

  const collect = (childProvider: C) => {
    childProviders.push(childProvider)
  }

  const clear = (childProvider: C) => {
    removeItem(childProviders, childProvider)
  }

  const bindChildren = (parentProvider: P) => {
    provide<P & BaseParentProvider<C>>(key, {
      collect,
      clear,
      ...parentProvider,
    })
  }

  return {
    childProviders,
    bindChildren,
  }
}

export function useParent<P, C>(key: symbol) {
  if (!KeyInProvides(key)) {
    return {
      parentProvider: null,
      bindParent: null,
    }
  }

  const rawParentProvider = inject<P & BaseParentProvider<C>>(key) as P & BaseParentProvider<C>

  const { collect, clear, ...parentProvider } = rawParentProvider

  const bindParent = (childProvider: C) => {
    onMounted(() => collect(childProvider))
    onBeforeUnmount(() => clear(childProvider))
  }

  return {
    parentProvider,
    bindParent,
  }
}

export function KeyInProvides(key: symbol) {
  const instance = getCurrentInstance() as any

  return key in instance.provides
}
