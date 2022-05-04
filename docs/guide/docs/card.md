# Card 卡片

Card 卡片包含了活动信息相关的内容和动作。

<ClientOnly>
<card-demo></card-demo>
</ClientOnly>

## 基本使用

本组件提供了丰富的插槽以供实现你想要的卡片。[设计指南](https://m3.material.io/components/cards/guidelines)

### 类型

Card 有三种类型：elevated, filled 和 outlined。
通过`type`属性来设置 Card 类型。

<ClientOnly>
<card-type></card-type>
</ClientOnly>

**1. elevated  2. filled  3. outlined**

在模板中：
```html
<template>
    <div class="container">
        <m-space direction="column" align="center" :size="[24, 0]">

            <!-- elevated Card -->
            <m-card type="elevated" :style="{ width: '370px' }" 
                    subhead="From your recent favorites">
                <template #title>
                    <div class="headline-medium" 
                        :style="{ marginBottom: '8px' }">
                        Play <br />
                        relaxing songs
                    </div>
                </template>
                <template #action>
                    <m-space justify="end" size="0">
                        <m-button>Get started</m-button>
                    </m-space>
                </template>
            </m-card>

            <!-- filled Card -->
            <m-card type="filled" :style="{ width: '370px' }" 
                    subhead="From your recent favorites">
                <template #title>
                    <div class="headline-medium" 
                        :style="{ marginBottom: '8px' }">
                        Play <br />
                        relaxing songs
                    </div>
                </template>
                <template #action>
                    <m-space justify="end" size="0">
                        <m-button type="outlined">Get started</m-button>
                    </m-space>
                </template>
            </m-card>
            
            <!-- outlined Card -->
            <m-card type="outlined" :style="{ width: '370px' }" 
                    subhead="From your recent favorites">
                <template #title>
                    <div class="headline-medium" 
                        :style="{ marginBottom: '8px' }">
                        Play <br />
                        relaxing songs
                    </div>
                </template>
                <template #action>
                    <m-space justify="end" size="0">
                        <m-button type="filled-tonal">Get started</m-button>
                    </m-space>
                </template>
            </m-card>
        </m-space>
    </div>
</template>
```

### 结构

我们以 Elevated card 举例。

<ClientOnly>
<card-use></card-use>
</ClientOnly>

在模板中：

```html
<template>
    <div class="container">
        <m-card type="elevated" :style="{ width: '360px' }">
            <template #header>
                <m-card-header head="Header" subhead="Subhead">
                    <template #avatar>
                        <m-avatar></m-avatar>
                    </template>
                    <template #extra>
                        <m-icon name="more_vert"></m-icon>
                    </template>
                </m-card-header>
            </template>
            <template #media>
                <img class="card-img" src="Placeholder.png" />
            </template>
            <template #title>Title</template>
            <template #subtitle>Subtitle</template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elt, sed do eiusmod tempor
            </template>
            <template #action>
                <m-space justify="end" :size="[0, 8]">
                    <m-button type="outlined">Enabled</m-button>
                    <m-button>Enabled</m-button>
                </m-space>
            </template>
        </m-card>
    </div>
</template>
```

Card 共拥有六个插槽，从上到下依次为：
- header
- media
- title
- subtitle
- content
- action

对于 Header，提供了`m-card-header`来支持更多的配置

Card header 拥有四个插槽，分别为：
- avatar
- head
- subhead
- extra

`title`、`subtitle`、`head`与`subhead`都可以通过属性的方式进行设置而无需使用插槽。

### 横向

Card 可以从两种方向展示内容。通过设置`direction`属性为`horizontal`，可以很方便的让卡片适应不同的设备形态。

此种状态中，header、media 与其他插槽的集合将从左到右排布。

<ClientOnly>
<card-direction></card-direction>
</ClientOnly>

### 添加涟漪效果

使用`v-ripple`指令为 Card 添加涟漪效果。

<ClientOnly>
<card-ripple></card-ripple>
</ClientOnly>

## API

### Card

#### 属性

| 参数       | 说明             | 类型      | 默认值  |
| ---------- | ---------------- | -------------- | ------- |
| `type`     | Card 的类型 | _'elevated' \| 'filled' \| 'outlined'_ | `elevated`  |
| `direction` | Card 的方向 | _'stacked' \| 'horizontal'_ | `stacked`  |
| `title` | Card 的标题     | _string \| slot_ | `-`  |
| `subtitle` | Card 的副标题     | _string \| slot_ | `-` |


#### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `header` | Card 的头部，位置在最上层 | `-` |
| `media` | Card 的媒体部分 | `-` |
| `title` | Card 的标题 | `-` |
| `subtitle` | Card 的副标题 | `-` |
| `content` | Card 的内容部分 | `-` |
| `action` | Card 的操作组，位置在卡片底部 | `-` |

### Card.Header

#### 属性

| 参数 | 说明 | 类型 | 默认值|
| --- | --- | --- | --- |
| `head` | Header 的标头     | _string \| slot_ | `-`  |
| `subhead` | Card 的副标头     | _string \| slot_ | `-` |

#### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `avatar` | 头像/图标，也可在单独使用 Header 时做媒体插槽 | `-` |
| `head` | Header 的标头 | `-`  |
| `subhead` | Card 的副标头 | `-` |
| `extra` | 右上角的操作区域 | `-` |

## More demo

<ClientOnly>
<card-more></card-more>
</ClientOnly>
