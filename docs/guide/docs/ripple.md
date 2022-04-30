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

### 设置颜色

通过对`v-ripple`中`color`属性的设置，我们可以修改涟漪的颜色。
<ClientOnly>
<ripple-color></ripple-color>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container">
        <div class="ripple-example" 
             v-ripple="{ color: 'var(--md-color-primary)' }">
            点击
        </div>
    </div>
</template>
```

### 设置禁用状态

设置`v-ripple`中`disabled`属性可以禁用涟漪效果，可以关闭部分组件默认的涟漪。

在模板中：

```html
<template>
    <div class="container">
        <div class="ripple-example" 
             v-ripple="{ disabled: false }">
            点击
        </div>
    </div>
</template>
```
## API

### 选项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 涟漪颜色 | _string_ | `currentColor` |
| `disabled` | 禁用状态 | _boolean_ | `false` |
