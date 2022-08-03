# Dialog 对话框

对话框是出现在应用程序内容前的模态窗口，以提供关键信息或请求决策。对话框出现时将禁用应用程序的所有功能，并保持在屏幕上，直到确认、关闭或采取必要的操作。


## 使用

### 基本使用

通过绑定 `v-model:visible` 来控制 Dialog 的显示。

可以通过 `with-icon` 属性设置图标。

<ClientOnly>
<dialog-use></dialog-use>
</ClientOnly>

在代码中：
```vue
<template>
  <div class="container">
    <m-space>
      <MButton @click="handleClick1" type="filled-tonal">
        Open Dialog
      </MButton>
      <MButton @click="handleClick2" type="filled-tonal">
        Open Icon Dialog
      </MButton>
    </m-space>
    <MDialog 
      v-model:visible="visible1" 
      title="Basic dialog title" 
      unmount-on-close>
      {{ content }}
    </MDialog>
    <MDialog 
      v-model:visible="visible2" 
      with-icon="mobile_friendly" 
      title="Dialog with hero icon" 
      unmount-on-close>
      {{ content }}
    </MDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
```

### 按钮文本 

通过设置 `ok-text`、`cancel-text` 属性来设置两个按钮的文本。`ok-button-filled` 属性可以强调 OK 按钮（设置按钮类型为 `filled-tonal`）。

同时可以通过设置 `ok-button-props` 与 `cancel-button-props` 来设置两个按钮的参数。

<ClientOnly>
<dialog-btn></dialog-btn>
</ClientOnly>

在代码中：
```vue
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

const content = 'Deleting the selected messages will also remove them from all synced devices.'

const visible1 = ref(false)

const handleClick1 = () => {
  visible1.value = !visible1.value
}
</script>
```