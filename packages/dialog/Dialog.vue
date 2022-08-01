<template>
  <teleport :to="teleportContainer">
    <div></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ref } from 'vue'
import props from './props'
import { useTeleportContainer } from '@packages/utils/hooks'

export default defineComponent({
  props,

  setup(props) {
    const { fullscreen, popupContainer } = toRefs(props)

    const _visible = ref(props.defaultVisible)
    const computedVisible = computed(() => props.visible ?? _visible.value)

    const { teleportContainer, containerRef } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
    })

    return { teleportContainer }
  },
})
</script>

<style lang="scss"></style>
