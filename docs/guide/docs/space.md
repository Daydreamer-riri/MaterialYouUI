# Space 间距

设置组件之间的间距，使您更有效率的进行 flex 布局。

### 使用

避免组件紧贴在一起，拉开统一的空间。
- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

```html:no-line-numbers
<template>
    <my-space>
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
        <my-button>Button3</my-button>
    </my-space>
</template>
```

<ClientOnly>
<!-- <space-use></space-use> -->
</ClientOnly>


### 垂直

```html
<template>
    <my-space direction="column" size="large">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
        <my-button>Button3</my-button>
    </my-space>
</template>
```

### 间隙

```html
<template>
    <my-space :size="[20, 20]">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
        <my-button>Button3</my-button>
        <my-button>Button4</my-button>
        <my-button>Button5</my-button>
        <my-button>Button6</my-button>
    </my-space>
</template>
```

### 靠右

```html
<template>
    <my-space justify="end">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
    </my-space>
</template>
```

### 环绕

```html
<template>
    <my-space justify="space-around">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
    </my-space>
</template>
```

### 居中

```html
<template>
    <my-space justify="center">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
    </my-space>
</template>
```

### 两端对齐

```html
<template>
    <my-space justify="space-between">
        <my-button>Button1</my-button>
        <my-button>Button2</my-button>
    </my-space>
</template>
```

## API

### 属性

| 参数        | 说明                                                                                    | 类型                                                       | 默认值   |
| ----------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| `align`     | 垂直排列方式 可选值为 `stretch` `center` `start` `end` `baseline`                       | _string_                                                   | `-`      |
| `justify`   | 水平排列方式 可选值为 `start` `end` `center` `space-around` `space-between`             | _string_                                                   | `start`  |
| `size`      | 间距，可选值为 `mini` `small` `normal` `large` 或 `[垂直间距, 水平间距]` (支持长度单位) | _string \| number \| [string \| number, string \| number]_ | `normal` |
| `wrap`      | 是否超出换行                                                                            | _boolean_                                                  | `true`   |
| `direction` | 布局方向 可选值为 `row` `column`                                                        | _string_                                                   | `row`    |
| `inline`    | 是否为行内元素                                                                          | _boolean_                                                  | `false`  |

### 插槽

| 插槽名    | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | Space 内容 | `-`  |
