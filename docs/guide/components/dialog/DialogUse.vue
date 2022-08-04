<template>
  <div class="container">
    <m-space>
      <m-button @click="handleClick1" type="filled-tonal">Open Dialog</m-button>
      <m-button @click="handleClick2" type="filled-tonal">Open Icon Dialog</m-button>
    </m-space>
    <m-dialog v-model:visible="visible1" title="Basic dialog title" unmount-on-close>
      {{ content }}
    </m-dialog>
    <m-dialog v-model:visible="visible2" with-icon="mobile_friendly" title="Dialog with hero icon" unmount-on-close>
      {{ content }}
    </m-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, h, defineComponent } from 'vue'
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
