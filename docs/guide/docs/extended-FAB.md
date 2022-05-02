# Extended FAB

Extended FAB 帮助人们采取主要行动。它们比FABs更宽，以容纳文本标签和更大的目标区域。

应该在具有长滚动视图的页面上使用 Extended FAB。不要在无法滚动的视图中使用扩展FAB。

<img src="/img/extendedFabHead.png" style="display:block;border-radius:13px;">

## 基本使用

Extended FAB 组件基于 FAB，部分使用方法见[Floating action buttons (FAB)](./FAB.md)。

通过在`<m-fab></m-fab>`标签内添加`text`插槽实现 Extended FAB。

> 仅 `medium` 尺寸支持 Extended FAB

<ClientOnly>
<extended-fab-use></extended-fab-use>
</ClientOnly>

1. 带有图标和文字的 Extended FAB  
2. 没有图标的 Extended FAB

在模板中：
```html
<template>
    <div class="container">
        <m-fab name="navigation">
            <template #text>Navigate</template>
        </m-fab>
        <m-fab type="surface">
            <template #text>Reroute</template>
        </m-fab>
    </div>
</template>
```

### 展开与关闭

通过调整`extended`属性值来控制 Extended FAB 的展开与否。

<ClientOnly>
<extended></extended>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container">
        <m-fab name="save" type="tertiary" :extended="state">
            <template #text>Save changes</template>
        </m-fab>
        <m-button class="btn" type="filled-tonal" @click="changeState">
            change state
        </m-button>
    </div>
</template>
```

在 Script 中：
```html
<script setup>
import MFab from '@packages/FAB'
import MButton from '@packages/button'
import { ref } from 'vue'

const state = ref(true)

const changeState = () => {
    state.value = !state.value
}
</script>
```

### 长滚动页面中的应用

在向下浏览时，Extended FAB 会自动收起，让用户专注于内容。

<ClientOnly>
<extended-demo></extended-demo>
</ClientOnly>

## API
### 属性

| 参数       | 说明             | 类型                                                              | 默认值  |
| ---------- | ---------------- | ----------------------------------------------------------------- | ------- |
| `type`     | FAB 的颜色类型      | _'primary' \| 'surface' \| 'secondary' \|'tertiary'_ | `primary`  |
| `size`     | FAB 的尺寸, 仅 medium 可展开     | _'medium'_ | `medium`  |
| `extended` | FAB 是否展开     | _'bolean'_ | `true`  |
| `disabled` | FAB 是否禁用     | _boolean_ | `false` |
| `name`     | FAB 的图标字段       | _string_ | `null`  |
| `ripple` | 是否使用涟漪效果 | _boolean_ | `true` |

### 事件

| 事件名       | 说明                   | 参数           |
| ------------ | ---------------------- | -------------- |
| `click`      | 点击 FAB 时触发         | `event: Event` |
| `touchstart` | 触摸手指压下 FAB 时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `icon` | Extended FAB 图标 | `-`  |
| `text` | Extended FAB 文本 | `-`  |
