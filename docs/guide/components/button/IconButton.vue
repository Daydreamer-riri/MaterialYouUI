<template>
    <div class="container">
        <m-button type="elevated" icon="add">Elevated button</m-button>
        <m-button type="text" icon="check">Text button</m-button>
    </div>
</template>

<script>
import MButton from '../../../../packages/button/Button.vue'
export default {
    components: { MButton },
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
