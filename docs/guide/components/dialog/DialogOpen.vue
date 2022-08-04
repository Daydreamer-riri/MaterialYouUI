<template>
  <div class="container">
    <m-space>
      <MButton @click="handleClick1" type="filled-tonal">Open Dialog</MButton>
    </m-space>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import MButton from '@packages/button'
import MDialog from '@packages/dialog'
import MSpace from '@packages/space'

const ModalContent = {
  setup() {
    const onClick = () => {
      MDialog.open({
        title: 'Nest dialog',
        content: 'This is an nest dialog',
        okButtonProps: {
          type: 'outlined',
        },
      })
    }

    return () =>
      h('div', { class: 'modal-content' }, [h(MButton, { onClick, type: 'outlined' }, () => 'Open Nest Modal')])
  },
}

const handleClick1 = () => {
  MDialog.open({
    title: 'Open dialog',
    content: () => h(ModalContent),
    withIcon: 'mobile_friendly',
  })
}
</script>

<style lang="scss" scoped></style>
