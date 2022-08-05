<template>
  <div class="container">
    <m-space>
      <m-button @click="handleClick1" type="filled-tonal">Open Dialog</m-button>
      <m-button @click="handleClick2" type="filled-tonal">Open Dialog</m-button>
    </m-space>
    <m-dialog
      v-model:visible="visible1"
      with-icon="delete"
      title="Permanently delete"
      ok-text="Delete"
      ok-button-filled
      unmount-on-close
      :cancel-button-props="{ disabled: true }"
    >
      {{ content }}
    </m-dialog>
    <m-dialog
      v-model:visible="visible2"
      title="要开启超级省电模式吗"
      ok-text="开启"
      cancel-text="不用了"
      :ok-button-props="{ type: 'filled-tonal' }"
      :cancel-button-props="{ type: 'outlined' }"
    >
      {{ '系统会限制您只能使用必须应用，以延长电池续航时间' }}
    </m-dialog>
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
