<template>
    <div class="col">
        <div class="continer">
            <my-icon name="settings" color="var(--md-color-primary)" fill size="large" />
            <my-icon name="face" size="medium"></my-icon>
            <my-icon name="close"></my-icon>
        </div>
    </div>
</template>
<style lang="less">
.continer {
    display: flex;
    justify-content: start;
    padding: 8px 0 8px;
}
.col {
    display: flex;
    flex-direction: column;
}
</style>
<script>
import MyIcon from '..'
export default {
    components: {
        [MyIcon.name]: MyIcon,
    },
}
</script>
