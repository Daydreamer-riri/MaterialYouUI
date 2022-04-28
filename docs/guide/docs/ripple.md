# Ripple 涟漪指令

涟漪是用于传达组件或交互元素状态的可视化表示。

## 使用

### 基本使用

通过给元素添加`v-ripple`指令使元素点击时拥有涟漪效果。

<ClientOnly>
<ripple-use></ripple-use>
</ClientOnly>

在模板中：
```html
<template>
    <div class="container">
        <div class="ripple-example" v-ripple>点击</div>
    </div>
</template>
```
