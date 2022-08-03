<template>
  <div class="container">
    <m-space>
      <MButton @click="handleClick1" type="filled-tonal">Open Dialog</MButton>
    </m-space>
    <MDialog
      v-model:visible="visible1"
      with-icon="delete"
      title="Permanently delete"
      ok-text="Delete"
      ok-button-filled
      unmount-on-close
      :cancel-button-props="{ disabled: true }"
    >
      {{ content }}
    </MDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MButton from '@packages/button'
import MDialog from '@packages/dialog'
import MSpace from '@packages/space'

const content = 'Deleting the selected messages will also remove them from all synced devices.'

const visible1 = ref(false)
const visible2 = ref(false)

const handleClick1 = () => {
  visible1.value = !visible1.value
}

const handleClick2 = () => {
  visible2.value = !visible2.value
}
</script>

<style lang="scss"></style>
