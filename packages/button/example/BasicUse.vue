<template>
    <div class="continer">
        <my-button type="filled" @click="click" icon="add_circle" iconFill>Enabled</my-button>
        <my-button disabled>Disabled</my-button>
    </div>
</template>
<style lang="less">
.continer {
    display: flex;
    justify-content: space-between;
}
</style>
<script>
import Button from '../Button'

export default {
    name: 'BasicUse',
    components: {
        [Button.name]: Button,
    },
    setup() {
        const click = () => {
            console.log('123')
        }
        return {
            click,
        }
    },
}
</script>
