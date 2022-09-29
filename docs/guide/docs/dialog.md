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
      <m-button @click="handleClick1" type="filled-tonal">
        Open Dialog
      </m-button>
      <m-button @click="handleClick2" type="filled-tonal">
        Open Icon Dialog
      </m-button>
    </m-space>
    <m-dialog 
      v-model:visible="visible1" 
      title="Basic dialog title" 
      unmount-on-close>
      {{ content }}
    </m-dialog>
    <m-dialog 
      v-model:visible="visible2" 
      with-icon="mobile_friendly" 
      title="Dialog with hero icon" 
      unmount-on-close>
      {{ content }}
    </m-dialog>
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

### 按钮

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
      <m-button @click="handleClick1" type="filled-tonal">Open Dialog</m-button>
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

### 函数调用

通过函数的方式调用对话框。

<ClientOnly>
<dialog-open></dialog-open>
</ClientOnly>

在代码中
```vue
<template>
  <div class="container">
    <MButton @click="handleClick1" type="filled-tonal">Open Dialog</MButton>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

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
      h('div', { class: 'modal-content' }, [
        h(MButton, { onClick, type: 'outlined' }, () => 'Open Nest Modal')
      ])
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
```

## API

### Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `visible` <br/> `(v-model)` | 对话框是否可见 | _boolean_ | `-` | 
| `default-visible` | 对话框默认是否可见（非受控状态） | _boolean_ | `false` | 
| `width` | 对话框的宽度，不设置的情况下<br/>会使用样式中的宽度值 | _number \| string_ | `-` |
| `top` | 对话框的距离顶部的高度 | _number \| string_ | `-` |
| `left` | 对话框的距离左端的距离 | _number \| string_ | `-` |
| `mask` | 是否显示遮罩层 | _boolean_ | `true` |
| `title` | 标题 | _string_ | `-` |
| `unmount-on-close` | 关闭时是否卸载节点 | _boolean_ | `false` |
| `mask-closable` | 是否点击遮罩层可以关闭对话框 | _boolean_ | `true` |
| `ok-text` | 确认按钮的内容 | _string_ | `-` |
| `cancel-text` | 取消按钮的内容 | _string_ | `-` |
| `ok-loading` | 确认按钮是否为加载中状态 | _boolean_ | `false` |
| `ok-button-props` | 确认按钮的Props | _object_ | `-` |
| `cancel-button-props` | 取消按钮的Props | _object_ | `-` |
| `ok-loading` | 确认按钮是否为加载中状态 | _boolean_ | `false` |
| `with-icon` | 顶部显示图标 | _string_ | `_` |
| `on-before-ok` | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | _( done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>_ | `-` |
| `on-before-cancel` | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。 | _() => boolean_ | `-` |

### Event
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `ok` | 点击确定按钮时触发 | `-` |
| `cancel` | 点击取消、关闭按钮时触发 | `-` |
| `open` | 对话框打开后（动画结束）触发 | `-` |
| `close` | 对话框关闭后（动画结束）触发 | `-` |
| `before-open` | 对话框打开前触发 | `-` |
| `before-close` | 对话框关闭前触发 | `-` |

### Slots
| 插槽 | 描述 | 参数 |
| --- | --- | --- |
| `title` | 标题 | `-` | 
| `icon` | 顶部图标 | `-` |
| default | dialog 主体部分 | `-` |
| `actions` | 底部 操作区域 | `-` |

