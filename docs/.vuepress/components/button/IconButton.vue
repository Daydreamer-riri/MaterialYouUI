<template>
    <div class="container">
        <my-button type="elevated" icon="add">Elevated button</my-button>
        <my-button type="text" icon="check">Text button</my-button>
    </div>
</template>

<script>
import MyButton from '../../../../packages/button/Button.vue'
export default {
    components: { MyButton },
}
</script>

<style lang="less" scoped>
@import '../styles/exmapleCard.less';

.container {
    height: 64px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
