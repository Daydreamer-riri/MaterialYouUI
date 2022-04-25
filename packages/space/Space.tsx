import { defineComponent, VNodeChild, Fragment, VNode, Comment } from 'vue'
import { createNamespace, call } from '../utils/components'
import { internalSizeValidator, props } from './props'
import type { SpaceInternalSize, SpaceSize } from './props'
import { isArray } from '../utils/share'
import { toPxNum } from '../utils/elements'
import './space.less'

const { n, classes } = createNamespace('space')

const internalSizes: Record<SpaceInternalSize, number[]> = {
    small: [4, 6],
    normal: [8, 8],
    large: [12, 20],
}

export default defineComponent({
    name: 'MySpace',
    props,
    setup(props, { slots }) {
        // 转换为 [y, x] 形式，若 size 不合法则会在 toPxNum() 中返回 0，即最终返回 [0, 0]
        const getSize = (size: SpaceSize, isInternalSize: boolean) => {
            return isInternalSize
                ? internalSizes[size as SpaceInternalSize]
                : isArray(size)
                ? size.map(toPxNum)
                : [toPxNum(size), toPxNum(size)]
        }

        return () => {
            const { inline, justify, align, wrap, direction, size } = props
            let children: VNodeChild[] = call(slots.default) ?? []
            const isInternalSize = internalSizeValidator(size)
            const [y, x] = getSize(size, isInternalSize)

            // 扁平化节点
            const flatten = (vNodes: any) => {
                const result: VNode[] = []

                vNodes.forEach((vNode: any) => {
                    // 暂时不理解
                    if (vNode.type === Comment) return

                    if (vNode.type === Fragment && isArray(vNode.children)) {
                        vNode.children.forEach((item: VNode) => {
                            result.push(item)
                        })
                        return
                    }

                    result.push(vNode)
                })

                return result
            }

            children = flatten(children)

            const lastIndex = children.length - 1
            const spacers = children.map((child, index) => {
                let margin = '0'

                if (direction === 'row') {
                    if (justify === 'start' || justify === 'center' || justify === 'end') {
                        if (index !== lastIndex) {
                            margin = `${y / 2}px ${x}px ${y / 2}px 0`
                        } else {
                            margin = `${y / 2}px 0`
                        }
                    } else if (justify === 'space-around') {
                        margin = `${y / 2}px ${x / 2}px`
                    } else if (justify === 'space-between') {
                        if (index === 0) {
                            margin = `${y / 2}px ${x / 2}px ${y / 2}px 0`
                        } else if (index === lastIndex) {
                            margin = `${y / 2}px 0 ${y / 2}px ${x / 2}px`
                        } else {
                            margin = `${y / 2}px ${x / 2}px`
                        }
                    }
                }

                if (direction === 'column' && index !== lastIndex) {
                    margin = `0 0 ${y}px 0`
                }

                return <div style={{ margin }}>{child}</div>
            })

            return (
                <div
                    class={classes(n(), [inline, n('--inline')])}
                    style={{
                        flexDirection: direction,
                        justifyContent: justify,
                        alignItems: align,
                        flexWrap: wrap ? 'wrap' : 'nowrap',

                        margin: direction === 'row' ? `-${y / 2}px 0` : undefined,
                    }}>
                    {spacers}
                </div>
            )
        }
    },
})
