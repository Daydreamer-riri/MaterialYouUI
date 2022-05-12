# Chips 纸片

纸片帮助人们输入信息、进行选择、过滤内容或触发动作。芯片可以在同一区域显示多个交互元素，比如可选择的电影时间列表，或一系列电子邮件联系人。

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

```html
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

Assist Chips表示可以跨越多个应用程序的智能或自动化操作，例如从主屏幕打开日历事件。Assist Chips的功能就像用户要求助手完成操作一样。它们应该在UI中动态的根据上下文出现。

辅助芯片的替代方法是按钮，应持续稳定地显示。

<ClientOnly>
<chip-assist></chip-assist>
</ClientOnly>

#### 使用方式

`type`属性值为`assist`，可通过`icon`属性设置图标。也可通过`left`插槽写入图标，实现切换图标等效果。



### Filter chips

### Input chips

### Suggestion chips

### group

<ClientOnly>
<chip-group-use></chip-group-use>
</ClientOnly>


