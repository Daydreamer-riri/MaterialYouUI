# Elevation 海拔

通过不同的阴影与颜色来区分不同的海拔。

## 使用

- 阴影：添加类名
- 颜色：使用 css 变量

<ClientOnly>
<elevation-use></elevation-use>
</ClientOnly>

在模板中：
```html
<template>
  <div class="container" 
       style="background-color: var(--md-color-surface-light)">
    <m-space :size="[16, 16]">
      <div
        class="elevation-example-item"
        :class="`md-elevation-z${e}`"
        :style="{ backgroundColor: `var(--md-color-surface${e}-light)` }"
        v-for="e in 5"
        :key="e"
      ></div>
    </m-space>
  </div>
  <div class="container" 
       style="background-color: var(--md-color-surface-dark)">
    <m-space :size="[16, 16]">
      <div
        class="elevation-example-item"
        :class="`md-elevation-z${e}`"
        :style="{ backgroundColor: `var(--md-color-surface${e}-dark)` }"
        v-for="e in 5"
        :key="e"
      ></div>
    </m-space>
  </div>
</template>
```
> css 变量中不添加`-light`与`-dark` 即可自适应深色模式。


