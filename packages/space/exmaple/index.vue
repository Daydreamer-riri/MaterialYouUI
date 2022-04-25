<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
// 这样引入？
import MySpace from '..'
import MyButton from '../../button'
</script>
<template>
    <div>
        <app-type>基本用法</app-type>
        <my-space>
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
            <my-button type="filled-tonal">Button3</my-button>
        </my-space>

        <app-type>垂直</app-type>
        <my-space direction="column" size="large">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
            <my-button type="filled-tonal">Button3</my-button>
        </my-space>

        <app-type>间隙</app-type>
        <my-space :size="[20, 20]">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
            <my-button type="filled-tonal">Button3</my-button>
            <my-button type="filled-tonal">Button4</my-button>
            <my-button type="filled-tonal">Button5</my-button>
            <my-button type="filled-tonal">Button6</my-button>
        </my-space>

        <app-type>靠右</app-type>
        <my-space justify="end">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
        </my-space>

        <app-type>环绕</app-type>
        <my-space justify="space-around">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
        </my-space>

        <app-type>居中</app-type>
        <my-space justify="center">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
        </my-space>

        <app-type>两端对齐</app-type>
        <my-space justify="space-between">
            <my-button type="filled-tonal">Button1</my-button>
            <my-button type="filled-tonal">Button2</my-button>
        </my-space>
    </div>
</template>
