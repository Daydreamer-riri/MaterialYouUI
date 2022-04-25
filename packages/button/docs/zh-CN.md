# Button 按钮

按钮用于开始一个即时操作。

## 类型

Material you 提供了五种常见按钮。

<ol>
    <li>Elevated button</li>
    <li>Filled button</li>
    <li>Filled tonal button</li>
    <li>Outlined button</li>
    <li>Text button</li>
</ol>

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

### 基本使用

```html
<b-button>组件库从我开始</b-button>
```

```vue
import BasicUse from '../example/BasicUse'
```

### 主题色按钮

```html
<b-button color="#009688">组件库从我开始</b-button>
```

```vue
import ModifyColor from '../example/ModifyColor'
```

## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `color` | 按钮颜色 | _string_ | `default` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |
