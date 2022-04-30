# Floating action buttons (FAB)

FAB代表屏幕上最重要的动作。它使关键行动触手可及。


<img src="/img/FABhead.png" style="height:300px; display:block;">

## 基本使用

### 尺寸
浮动动作按钮有三种尺寸。
1. FAB 
2. small FAB 
3. large FAB。

<ClientOnly>
<fab-size></fab-size>
</ClientOnly>

在模板中：
```html
<template>
    <div class="container">
        // 1    未设置 size 默认为 medium
        <m-fab type="tertiary" name="accessible_forward"></m-fab>
        // 2
        <m-fab size="small" name="edit"></m-fab>
        // 3
        <m-fab size="large" type="surface" name="palette"></m-fab>
    </div>
</template>
```

### 颜色类型
FABs 默认拥有四种颜色类型：

<ClientOnly>
<fab-type></fab-type>
</ClientOnly>

**1. primary  2. Surface  3. Secondary  4. Tertiary**

在模板中：

```html
<template>
    <div class="container">
        <m-fab name="edit"></m-fab>
        <m-fab type="surface" name="edit"></m-fab>
        <m-fab type="secondary" name="edit"></m-fab>
        <m-fab type="tertiary" name="edit"></m-fab>
    </div>
</template>
```

### 禁用状态

通过设置`disabled`属性来禁用 FABs。

<ClientOnly>
<fab-disabled></fab-disabled>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container">
        <m-fab name="edit"></m-fab>
        <m-fab name="edit" disabled></m-fab>
    </div>
</template>

```

### 禁用涟漪效果

可以设置`ripple`属性为`false`来禁用按钮的涟漪效果。

> 在 Material you 设计中，建议 pc 端关闭按钮的涟漪效果。

<ClientOnly>
<fab-noripple></fab-noripple>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container">
        <m-fab name="edit" :ripple="false"></m-fab>
        <m-fab type="surface" name="edit" :ripple="false"></m-fab>
        <m-fab type="secondary" name="edit" :ripple="false"></m-fab>
        <m-fab type="tertiary" name="edit" :ripple="false"></m-fab>
    </div>
</template>
```

## 使用插槽

FABs 可以使用`icon`插槽来更自定义设置图标，如设置[填充图标](./icon.md#图标填充及线宽)。

<ClientOnly>
<fab-slot></fab-slot>
</ClientOnly>

在模板中：

```html
<template>
    <m-fab>
        <template #icon>
            <m-icon name="edit" fill></m-icon>
        </template>
    </m-fab>
</template>
```



## API

### 属性

| 参数       | 说明             | 类型                                                              | 默认值  |
| ---------- | ---------------- | ----------------------------------------------------------------- | ------- |
| `type`     | FAB 的颜色类型      | _'primary' \| 'surface' \| 'secondary' \|'tertiary'_ | `primary`  |
| `disabled` | FAB 是否禁用     | _boolean_                                                         | `false` |
| `name`     | FAB 的图标字段       | _string_                                                          | `null`  |
| `ripple` | 是否使用涟漪效果 | _boolean_                                                         | `true` |

### 事件

| 事件名       | 说明                   | 参数           |
| ------------ | ---------------------- | -------------- |
| `click`      | 点击FAB 时触发         | `event: Event` |
| `touchstart` | 触摸手指压下FAB 时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `icon` | FAB 图标 | `-`  |