# Switch 开关

开关可以打开或关闭单个元素的状态，是调整设置的首选方法。它们用于控制二进制选项 - 打开/关闭或正确/错误。
<img src="https://lh3.googleusercontent.com/pmPDxU64QtXGHfdcmIb7uVkCty21WEj_k0vKS0E49mHu0SaYR3jxDQsvYCGDPt4vS0Oqbq9JmXe6NZZpG8-PIn4FmI8CE74k16wLXM2sB5I=s0" style="display:block;border-radius:13px;">

## 使用

通过`v-model`绑定变量来获取 Switch 的选中状态。

<ClientOnly>
<switch-use></switch-use>
</ClientOnly>

在代码中：
```html
<template>
    <div class="container">
        <m-switch v-model="isChecked"></m-switch>
    </div>
    <p>switch 的选中状态为：{{ isChecked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
</script>
```