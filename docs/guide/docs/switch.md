# Switch 开关

开关可以打开或关闭单个元素的状态，是调整设置的首选方法。它们用于控制二进制选项 - 打开/关闭或正确/错误。
<img src="https://lh3.googleusercontent.com/pmPDxU64QtXGHfdcmIb7uVkCty21WEj_k0vKS0E49mHu0SaYR3jxDQsvYCGDPt4vS0Oqbq9JmXe6NZZpG8-PIn4FmI8CE74k16wLXM2sB5I=s0" style="display:block;border-radius:13px;">

## 使用

通过`v-model`绑定变量来获取 Switch 的选中状态。

<ClientOnly>
<switch-use></switch-use>
</ClientOnly>

在代码中：
```vue
<template>
    <div class="container">
        <m-switch v-model="isChecked"></m-switch>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
</script>
```

#### 通过字段获取 Switch 选中状态

设置`checkedValue`与`uncheckedValue`后，`v-model`将在二者之中变化

<ClientOnly>
<switch-value></switch-value>
</ClientOnly>

```vue
<template>
    <div class="container">
        <m-switch 
        checked-value="open" 
        unchecked-value="off" 
        v-model="checkedValue">
        </m-switch>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkedValue = ref('open')
</script>
```

#### 将多个 Swtich 绑定到同一个数组

可以将多个 Switchs 绑定到同一个数组，此种使用方法必须设置 `checkedValue`。

<ClientOnly>
<switch-group></switch-group>
</ClientOnly>

```vue 
<template>
  <div class="container">
    <m-space direction="column" :size="[24, 0]">
      <m-switch checked-value="Wi-Fi" v-model="model"></m-switch>
      <m-switch checked-value="Bluetooth" v-model="model"></m-switch>
      <m-switch checked-value="Do not disturb" v-model="model"></m-switch>
      <m-switch checked-value="Airpline mode" v-model="model"></m-switch>
    </m-space>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const model = ref([])
</script>
```

### 显示图标

通过传入`withIcon`属性，来设置 Switch 是否显示图标

<ClientOnly>
<switch-icon></switch-icon>
</ClientOnly>

三种`withIcon`的值分别为：`false`, `true`, `'both'`

在代码中：
```vue
<template>
    <div class="container">
        <m-switch></m-switch>
        <m-switch with-icon></m-switch>
        <m-switch with-icon='both'></m-switch>
    </div>
</template>
```

### 禁用

通过设置`disabled`属性禁用 Switch。

<ClientOnly>
<switch-disabled></switch-disabled>
</ClientOnly>


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否选中     | _boolean \| string \| Array_ | `false` |
| `checkedValue` | 选中状态的值     | _boolean \| string_ | `true` |
| `uncheckedValue` | 选中状态的值     | _boolean \| string_ | `false` |
| `withIcon` | 是否显示图标 | _boolean \| `both`_ | `false` |
| `disabled` | 按钮是否禁用     | _boolean_ | `false` |

### 事件
| 事件名 | 说明  | 参数  |
| --- | --- | --- | 
| `click` | 点击时触发 | `event: Event` |
| `change` | 状态改变时触发 | `event: Event` |

### 方法
| 方法名 | 说明 | 参数 | 
| --- | --- | --- |
| `toggle` | 切换状态 | `-` |