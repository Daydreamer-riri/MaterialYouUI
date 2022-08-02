# Chips 纸片

纸片帮助人们输入信息、进行选择、过滤内容或触发动作。纸片可以在同一区域显示多个交互元素，比如可选择的电影时间列表，或一系列电子邮件联系人。

<img src="/img/chip/head.png" style="display:block;border-radius:13px;">

## 使用

Chips 有四种类型：assist, filter, input 和 suggestion。

<ClientOnly>
<chip-use></chip-use>
</ClientOnly>

1. [Assist chip](#assist-chips)
2. [Filter chip](#filter-chips)
3. [Input chip](#input-chips)
4. [Suggestion chip](#suggestion-chips)

> Chips 应该作为一组多个交互元素动态出现。

在模板中：

```vue
<template>
    <div class="container">
        <m-chip icon="event">Assist</m-chip>
        <m-chip type="filter" :modelValue="true">Filter</m-chip>
        <m-chip type="input" closable>Input</m-chip>
        <m-chip type="suggestion">Suggestion</m-chip>
    </div>
</template>
```

### Assist chips

Assist Chips 表示可以跨越多个应用程序的智能或自动化操作，例如从主屏幕打开日历事件。Assist Chips 的功能就像用户要求助手完成操作一样。它们应该在UI中动态的根据上下文出现。

Assist Chips 的替代方法是按钮，应持续稳定地显示。

<ClientOnly>
<chip-assist></chip-assist>
</ClientOnly>

##### 使用方式

`type`属性值为`assist`，可通过`icon`属性设置图标。也可通过`left`插槽写入图标，实现切换图标等效果。可以通过`@click`为其添加点击事件。

<ClientOnly>
<chip-assist-use></chip-assist-use>
</ClientOnly>

在代码中：

```vue
<template>
    <div class="container">
        <m-chip @click="handle">
            <template #left>
                <m-icon name="favorite" 
                        size="18" 
                        :fill="isFill" 
                        transition="50"></m-icon>
            </template>
            {{ text }}
        </m-chip>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const textSave = 'Save to favorites'
const textSaved = 'Saved to favorites'

const isFill = ref(false)
const text = ref(textSave)

const handle = () => {
    if (isFill.value) {
        isFill.value = false
        text.value = textSave
    } else {
        isFill.value = true
        text.value = textSaved
    }
}
</script>
```



### Filter chips

Filter chips 使用标签或描述性词来过滤内容。它们可以是切换按钮或复选框的好替代方法。

##### 使用方式

通过`v-model`绑定变量来获取单个 filter chip 的选中状态。

<ClientOnly>
<chip-filter-use></chip-filter-use>
</ClientOnly>

在代码中：

```vue
<template>
    <div class="container">
        <m-chip type="filter" v-model="model"> Filter </m-chip>
    </div>
    <p>
        Filter chip 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const model = ref(true)
</script>
```

##### 使用ChipGroup

通过使用`m-chip-group`包裹 chips，实现多选的效果。对`m-chip-group`添加`v-model`来获取所有 chips 的选中状态。

> 必须为 chips 添加`checked-value`来标识不同的 chip

<ClientOnly>
<chip-filter-group></chip-filter-group>
</ClientOnly>

在代码中：

```vue
<template>
    <div class="container">
        <m-chip-group v-model="model">
            <m-chip type="filter" checked-value="Docs">Docs</m-chip>
            <m-chip type="filter" checked-value="Slides">Slides</m-chip>
            <m-chip type="filter" checked-value="Sheets">Sheets</m-chip>
            <m-chip type="filter" checked-value="Images">Images</m-chip>
        </m-chip-group>
    </div>
    <p>
        Filter chip group 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script setup>
import { ref } from 'vue'

const model = ref([])
</script>
```

##### 单选 ChipGroup

通过设置 ChipGroup 的`single-selection`属性，可以保持选中 Chip 唯一。这为单选按钮、单选菜单提供了替代方案。

<ClientOnly>
<chip-filter-single></chip-filter-single>
</ClientOnly>

在代码中：

```vue
<template>
    <div class="container">
        <div class="screen">
            <m-divider></m-divider>
            <m-space direction="column" :size="[12, 0]">
                <div class="title-medium">Select Type</div>
                <m-chip-group v-model="model" single-selection>
                    <m-chip type="filter" checked-value="ES">Extra Soft</m-chip>
                    <m-chip type="filter" checked-value="S">Soft</m-chip>
                    <m-chip type="filter" checked-value="M">Medium</m-chip>
                    <m-chip type="filter" checked-value="H">Hard</m-chip>
                </m-chip-group>
                <!-- 占位 -->
                <div></div>

                <m-button long>Add to cart</m-button>
            </m-space>
            <!-- 占位 -->
            <div class="spacer"></div>

            <div class="bar"></div>
        </div>
    </div>
    <p>
        Filter chip group 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script setup>
import { ref } from 'vue'

const model = ref(['ES'])
</script>
```

### Input chips

输入芯片表示用户输入的离散信息片段，例如Gmail联系人或搜索字段中的过滤器选项。

##### 使用方式

通过`v-model`双向绑定 Input 的值，点击后可以进入编辑模式，失去焦点或回车键按下时保存数据

<ClientOnly>
<chip-input></chip-input>
</ClientOnly>

在代码中：
``` html
<template>
    <div class="container">
        <m-chip
            type="input"
            closable
            v-model="infos.list[index]"
            rounded
            v-for="(info, index) of infos.list"
            :key="index"
            @close="infos.list.splice(index, 1)"
        >
            <template #left>
                <div class="avatar"></div>
            </template>
            {{ getName(info) }}</m-chip
        >
    </div>
</template>

<script setup>

const getName = (info) => {
    return info.match(/.*(?= <)/)[0]
}
const infos = reactive({
    list: ['Fabian Reza <rezzain120@gmail.com>', 
    'Ping Qiang <pingqiang@gmail.com>'],
})
</script>
```

### Suggestion chips

### group



## API

### 属性

| 参数       | 说明             | 类型                                                              | 默认值  |
| ---------- | ---------------- | ----------------------------------------------------------------- | ------- |
| `type`     | chips 的类型 | _'assist' \| 'filter' \| 'input' \|'suggestion'_ | `assist`  |
| `checkedValue` | 选中状态的值     | _boolean \| string_ | `true` |
| `uncheckedValue` | 非选中状态的值     | _boolean \| string_ | `false` |
| `rounded` | 是否为圆形     | _boolean_ | `false` |
| `elevated`     | 是否具有海拔       | _boolean_  | `false`  |
| `closable` | 是否显示关闭图标 | _boolean_  | `false` |

### 事件

| 事件名       | 说明                   | 参数           |
| ------------ | ---------------------- | -------------- |
| `click`      | 点击 chip 时触发         | `event: Event` |
| `touchstart` | 触摸手指压下 chip 时触发 | `event: Event` |
| `close` | 点击关闭图标时触发 | `event: Event` |
| `change` | 状态改变时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | chip 内容 | `-`  |
| `left` | chip 左侧部分 | `-`  |
| `right` | chip 右侧部分 | `-`  |