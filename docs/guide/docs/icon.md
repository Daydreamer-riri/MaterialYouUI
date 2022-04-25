# Icon 图标

基于字体的图标库，也支持网络图片。 字体图标来自 [Google Fonts](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined)

## 使用

通过[Google Fonts](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined)查看图标字段，写入`name`属性。

并提供三种`type`属性，分别对应[Google Fonts](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined)中的 Outlined、Rounded 和 Sharp。

<ClientOnly>
<icon-use></icon-use>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container exmaple-card">
        <my-icon name="search"></my-icon>
        <my-icon name="home"></my-icon>
        <my-icon name="settings"></my-icon>
        <my-icon name="close"></my-icon>
        <my-icon name="menu"></my-icon>
    </div>
</template>
```

### 图标尺寸

通过设置`size`属性调整图标尺寸。属性接收`small`、`medium`、`large`三种预设尺寸尺寸。预设尺寸分别对应 20px 、24px、40px。

<ClientOnly>
<icon-size></icon-size>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container exmaple-card">
        <my-icon name="add_circle" size="small"></my-icon>
        <my-icon name="add_circle" size="medium"></my-icon>
        <my-icon name="add_circle" size="large"></my-icon>
    </div>
</template>
```

### 图标填充及线宽

通过设置`stokeWidth`与`fill`属性，可以改变图标的填充状态及线宽。

<ClientOnly>
<icon-fill></icon-fill>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container exmaple-card">
    <my-icon name="verified"></my-icon>
    <my-icon name="verified" fill></my-icon>
    <my-icon name="verified" stokeWidth="700"></my-icon>
    <my-icon name="verified" stokeWidth="200"></my-icon>

</template>
```

### 自定义图标库

可以通过设置`namespace`属性来使用您自己的图标库。假设我们设置一个名为`new-icons`的字体图标。

```html
<my-icon namespace="new-icons"></my-icon>
```

在层叠样式表设置样式：

```css
/* 设置字体 */
@font-face {
    font-family: 'new-icons';
    font-weight: normal;
    font-style: normal;
    /* ... */
}

/* 字体样式 */
.new-icons {
    font: normal normal normal 14px/1 'my-icons';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
```

## API

### 属性

| 参数         | 说明                         | 类型                                                               | 默认值                     |
| ------------ | ---------------------------- | ------------------------------------------------------------------ | -------------------------- |
| `name`       | 图标名称                     | _string_                                                           | `-`                        |
| `type`       | 图标的类型                   | _'outlined' \| 'rounded' \| 'sharp'_                               | `rounded`                  |
| `size`       | 图标的尺寸                   | _'small' \| 'medium' \| 'large' \| <br> number \| string_          | `medium`                   |
| `fill`       | 图标是否为填充样式           | _boolean_                                                          | `false`                    |
| `stokeWidth` | 图标的线宽，与`fill`不能共存 | _‘100’ \| ‘200’ \| ‘300’ \| ‘400’ \| ‘500’ \| <br> ‘600’ \| ‘700’_ | `false`                    |
| `color`      | 图标颜色，只适用于字体图标   | _string_                                                           | `-`                        |
| `namespace`  | 图标的命名空间               | _string_                                                           | `material-symbols-rounded` |
