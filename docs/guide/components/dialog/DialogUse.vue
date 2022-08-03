<template>
  <div class="container">
    <m-space>
      <MButton @click="handleClick1" type="filled-tonal">Open Dialog</MButton>
      <MButton @click="handleClick2" type="filled-tonal">Open Icon Dialog</MButton>
    </m-space>
    <MDialog v-model:visible="visible1" title="Basic dialog title" unmount-on-close>
      {{ content }}
    </MDialog>
    <MDialog v-model:visible="visible2" with-icon="mobile_friendly" title="Dialog with hero icon" unmount-on-close>
      {{ content }}
    </MDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MButton from '@packages/button'
import MDialog from '@packages/dialog'
import MSpace from '@packages/space'

const content =
  'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.'

const visible1 = ref(false)
const visible2 = ref(false)

const handleClick1 = () => {
  visible1.value = !visible1.value
}

const handleClick2 = () => {
  visible2.value = !visible2.value
}
</script>

<style lang="scss">
.container {
  background-color: var(--md-color-surface1);
  border-radius: 13px;
  padding: 40px;
}
</style>
