<template>
  <teleport :to="teleportContainer">
    <div
      v-if="!unmountOnClose || computedVisible || mounted"
      v-show="computedVisible || mounted"
      :class="classes('m-dialog-container')"
    >
      <transition :name="maskAnimationName" appear>
        <div v-if="mask" v-show="computedVisible" class="m-dialog-mask" />
      </transition>
      <div
        ref="wrapperRef"
        class="m-dialog-wrapper"
        @click.self="handleMaskClick"
        @mousedown.self="handleMaskMouseDown"
      >
        <transition :name="modalAnimationName" appear @after-enter="handleOpen" @after-leave="handleClose">
          <div v-show="computedVisible" ref="modalRef" :class="classes(n(), dialogClass)" :style="modalStyle">
            <div :class="n('text-content')">
              <div v-if="$slots.icon || withIcon" :class="classes(n('icon'))">
                <slot name="icon">
                  <m-icon :name="withIcon"></m-icon>
                </slot>
              </div>
              <div
                v-if="$slots.title || title"
                :class="classes(n('title'), [$slots.icon || withIcon, n('title--center')], 'headline-small')"
              >
                <slot name="title">{{ title }}</slot>
              </div>
              <div :class="classes(n('body'), 'body-medium')">
                <slot />
              </div>
            </div>
            <div :class="n('actions')">
              <slot name="actions">
                <m-button @click="handleCancel" type="text" v-bind="cancelButtonProps">{{ cancelText }}</m-button>
                <m-button @click="handleOk" :type="okButtonFilled ? 'filled-tonal' : 'text'" v-bind="okButtonProps">{{
                  okText
                }}</m-button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ref, onMounted, onBeforeUnmount, watch, CSSProperties } from 'vue'
import props from './props'
import { call, createNamespace } from '../utils/components'
import { isFunction, isBool, isNumber } from '../utils/share'
import { toSizeUnit } from '../utils/elements'
import { useOverflow, useTeleportContainer } from '@packages/utils/hooks'
import { contains, getElement } from '@packages/utils/elements'

import MButton from '@packages/button'
import MIcon from '@packages/icon'

const { n, classes } = createNamespace('dialog')

export default defineComponent({
  name: 'm-dialog',
  components: { MButton, MIcon },
  props,
  emits: ['update:visible', 'ok', 'cancel', 'open', 'close', 'beforeOpen', 'beforeClose'],
  setup(props, { emit }) {
    const { fullscreen, popupContainer } = toRefs(props)

    const wrapperRef = ref<HTMLElement>()
    const modalRef = ref<HTMLElement>()

    const _visible = ref(props.defaultVisible)
    const computedVisible = computed(() => props.visible ?? _visible.value)
    const _okLoading = ref(false)

    const mounted = ref(computedVisible.value)

    const { teleportContainer, containerRef } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
    })

    let promiseNumber = 0

    const close = () => {
      promiseNumber++
      if (_okLoading.value) {
        _okLoading.value = false
      }

      _visible.value = false
      emit('update:visible', false)
    }

    const handleOk = () => {
      const currentPromiseNumber = promiseNumber
      const promise = new Promise((resolve: (closed?: boolean) => void) => {
        if (isFunction(props.onBeforeOk)) {
          const result = props.onBeforeOk(resolve)

          if (isBool(result)) {
            resolve(result)
          } else {
            _okLoading.value = true
          }
        } else {
          resolve()
        }
      })

      promise.then((closed = true) => {
        if (currentPromiseNumber === promiseNumber) {
          _okLoading.value = false
          if (closed) {
            emit('ok')
            close()
          }
        }
      })
    }

    const handleCancel = () => {
      let result = true
      if (isFunction(props.onBeforeCancel)) {
        result = props.onBeforeCancel() ?? false
      }
      if (result) {
        emit('cancel')
        close()
      }
    }

    const currentIsMask = ref(false)

    const handleMaskMouseDown = (ev: Event) => {
      if (ev.target === wrapperRef.value) {
        currentIsMask.value = true
      }
    }

    const handleMaskClick = () => {
      if (props.mask && props.maskClosable && currentIsMask.value) {
        handleCancel()
      }
    }

    const handleOpen = () => {
      if (computedVisible.value) {
        if (!contains(wrapperRef.value, document.activeElement) && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
        emit('open')
      }
    }

    const handleClose = () => {
      if (!computedVisible.value) {
        mounted.value = false
        resetOverflow()
        emit('close')
      }
    }

    const { setOverflowHidden, resetOverflow } = useOverflow(containerRef)

    onMounted(() => {
      containerRef.value = getElement(props.popupContainer)
      if (computedVisible.value) {
        setOverflowHidden()
      }
    })

    onBeforeUnmount(() => {
      resetOverflow()
    })

    watch(computedVisible, (value: boolean) => {
      if (_visible.value !== value) {
        _visible.value = value
      }

      if (value) {
        emit('beforeOpen')
        mounted.value = true
        currentIsMask.value = false
        setOverflowHidden()
      } else {
        emit('beforeClose')
      }
    })

    const modalStyle = computed(() => {
      const style: CSSProperties = {
        ...(props.dialogStyle ?? {}),
      }

      if (props.width) {
        style.width = toSizeUnit(props.width)
      }
      if (props.top) {
        style.top = toSizeUnit(props.top)
      }
      if (props.left) {
        style.left = toSizeUnit(props.left)
      }

      return style
    })

    return {
      n,
      classes,
      teleportContainer,
      mounted,
      computedVisible,
      wrapperRef,
      handleOk,
      handleCancel,
      handleMaskClick,
      handleMaskMouseDown,
      handleOpen,
      handleClose,
      modalRef,
      modalStyle,
    }
  },
})
</script>

<style lang="scss">
@use './dialog.scss';
</style>
