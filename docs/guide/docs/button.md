---
title: Common buttons
---

# Common buttons

按钮传达用户可以采取的操作。它们通常被放置在整个 UI 中，如

-   Dialogs
-   Modal windows
-   Forms
-   Cards
-   Toolbars

## 使用

### 类型

Material you 提供了五种常见按钮。

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

<ClientOnly>
<basic-use></basic-use>
</ClientOnly>

在模板中：

```html
<template>
    <m-button type="elevated">Confirm</m-button>
    <m-button type="filled">Confirm</m-button>
    <m-button type="filled-tonal">Enabled</m-button>
    <m-button type="outlined">Confirm</m-button>
    <m-button type="text">Enabled</m-button>
</template>
```

> type 参数默认为 `filled`

### 添加图标

下面的示例显示带有图标的 elevated button 与 text button。

<ClientOnly>
<icon-button></icon-button>
</ClientOnly>

在模板中：

```html
<template>
    <m-button type="elevated" icon="add">Elevated button</m-button>
</template>
```

### 禁用状态

通过添加`disabled`属性改变按钮的禁用状态。

<ClientOnly>
<disabled-button></disabled-button>
</ClientOnly>

在模板中：

```html
<template>
    <m-button type="elevated" disabled>Confirm</m-button>
    <m-button type="filled" disabled>Confirm</m-button>
    <m-button type="filled-tonal" disabled>Enabled</m-button>
    <m-button type="outlined" disabled>Confirm</m-button>
    <m-button type="text" disabled>Enabled</m-button>
</template>
```
### 禁用涟漪效果

可以设置`ripple`属性为`false`来禁用按钮的涟漪效果。

> 在 Material you 设计中，建议 pc 端关闭按钮的涟漪效果。

<ClientOnly>
<ripple-disabled></ripple-disabled>
</ClientOnly>

### 长按钮

> Long button support in plan

## API

### 属性

| 参数       | 说明             | 类型                                                              | 默认值  |
| ---------- | ---------------- | ----------------------------------------------------------------- | ------- |
| `type`     | 按钮的类型       | _'elevated' \| 'filled' \| 'filled-tonal' \|'outlined' \| 'text'_ | `fill`  |
| `disabled` | 按钮是否禁用     | _boolean_                                                         | `false` |
| `icon`     | 按钮的图标       | _string_                                                          | `null`  |
| `iconFill` | 按钮图标是否填充 | _boolean_                                                         | `false` |
| `ripple` | 是否使用涟漪效果 | _boolean_                                                         | `true` |

### 事件

| 事件名       | 说明                   | 参数           |
| ------------ | ---------------------- | -------------- |
| `click`      | 点击按钮时触发         | `event: Event` |
| `touchstart` | 触摸手指压下按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |
