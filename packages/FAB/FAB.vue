<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="
      classes(
        n(),
        n(`--${btnSize}`),
        [disabled, n(`--disabled`), n(`--${btnType}`)],
        [!ripple, n(`--${btnType}--noripple`), n(`--${btnType}--ripple`)]
      )
    "
    :style="{
      color: textColor,
      background: color,
    }"
    ref="btn"
    :disabled="disabled"
    @transitionend="transitionend"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <slot name="icon">
      <m-icon v-if="name" :name="name" :size="btnSize === 'large' ? 36 : 24"></m-icon>
    </slot>
    <span
      ref="text"
      v-show="show"
      v-if="useText && btnSize === 'medium'"
      :class="
        classes(
          'text',
          'label-large',
          [extended, 'text-extended', 'text-noextended'],
          [!name && !useIcon, 'text-unuseicon', 'text-useicon']
        )
      "
    >
      <slot name="text"> </slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick, watch, useSlots } from 'vue'
import MIcon from '../icon'
import Ripple from '../ripple'
import MSpace from '../space'
import { props } from './props'
import { createNamespace } from '../utils/components'
import type { Ref } from 'vue'

const { n, classes } = createNamespace('fab')

export default defineComponent({
  name: 'MFab',
  components: { MIcon, MSpace },
  directives: { Ripple },
  props,
  setup(props) {
    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (!onClick || disabled) {
        return
      }

      onClick(e)
    }

    const handleTouchstart = (e: Event) => {
      const { disabled, onTouchstart } = props

      if (!onTouchstart || disabled) {
        return
      }

      onTouchstart(e)
    }

    const btn: Ref<HTMLButtonElement | null> = ref(null)
    const text: Ref<HTMLSpanElement | null> = ref(null)
    const show: Ref<boolean> = ref(props.extended)

    const useIcon = !!useSlots().icon
    const useText = !!useSlots().text

    // extended 相关函数
    const open = () => {
      if (!btn.value || !text.value) {
        return
      }
      btn.value.style.width = ''
      show.value = true

      nextTick(() => {
        const { offsetWidth } = btn.value as HTMLButtonElement
        ;(btn.value as HTMLButtonElement).style.width = 56 + 'px'

        requestAnimationFrame(() => {
          ;(btn.value as HTMLButtonElement).style.width = offsetWidth + 'px'
          // ;(text.value as HTMLSpanElement).style.transitionDelay = '0.2s'
          nextTick(() => {
            ;(text.value as HTMLSpanElement).style.opacity = '0'
            setTimeout(() => {
              requestAnimationFrame(() => {
                ;(text.value as HTMLSpanElement).style.opacity = '1'
                nextTick(() => {
                  ;(text.value as HTMLSpanElement).style.opacity = ''
                  // ;(text.value as HTMLSpanElement).style.transitionDelay = ''
                })
              })
            }, 100)
          })
        })
      })
    }

    const close = () => {
      if (!btn.value) return
      ;(btn.value as HTMLButtonElement).style.width = ''

      nextTick(() => {
        const { offsetWidth } = btn.value as HTMLButtonElement
        ;(btn.value as HTMLButtonElement).style.width = offsetWidth + 'px'

        requestAnimationFrame(() => {
          ;(btn.value as HTMLButtonElement).style.width = 56 + 'px'
        })
      })
    }

    const transitionend = (e: TransitionEvent) => {
      if (!props.extended && e.propertyName === 'width') {
        show.value = false
        ;(btn.value as HTMLButtonElement).style.width = ''
        ;(text.value as HTMLSpanElement).style.opacity = '1'
        nextTick(() => {
          ;(text.value as HTMLSpanElement).style.opacity = '0'
        })
      }
    }

    // 监听 extended 变化，控制展开动画
    watch(
      () => props.extended,
      (value) => {
        if (value) {
          open()
        } else {
          close()
        }
      }
    )
    return {
      handleClick,
      handleTouchstart,
      classes,
      n,
      btn,
      text,
      transitionend,
      show,
      useIcon,
      useText,
    }
  },
  computed: {
    btnType() {
      if (['surface', 'primary', 'secondary', 'tertiary'].includes(this.type)) {
        return this.type
      }
      return 'primary'
    },
    btnSize() {
      if (['small', 'medium', 'large'].includes(this.size)) {
        return this.size
      }
      return 'medium'
    },
  },
})
</script>
<style lang="scss" scoped>
@use '../styles/common.scss';
@use './FAB.scss';
</style>
