import type { RenderFunction } from 'vue'
import { isFunction } from './share'

export type RenderContent = string | RenderFunction

export const getSlotFunction = (param: RenderContent | undefined) => {
  if (param) {
    if (isFunction(param)) return param
    return () => param
  }
  return undefined
}
