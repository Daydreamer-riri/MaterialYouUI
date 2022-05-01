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

demo

<ClientOnly>
<extended-demo></extended-demo>
</ClientOnly>
