<template>
    <my-space direction="column" class="col">
        <my-space class="row" justify="space-between">
            <my-button type="elevated">Enabled</my-button>
            <my-button type="filled">Enabled</my-button>
            <my-button type="filled-tonal">Enabled</my-button>
            <my-button type="outlined">Enabled</my-button>
            <my-button type="text">Enabled</my-button>
        </my-space>
        <my-space class="row" justify="space-between">
            <my-button type="elevated" icon="add">Enabled</my-button>
            <my-button type="filled" icon="add">Enabled</my-button>
            <my-button type="filled-tonal" icon="add">Enabled</my-button>
            <my-button type="outlined" icon="add">Enabled</my-button>
            <my-button type="text" icon="add">Enabled</my-button>
        </my-space>
        <my-space class="row" justify="space-between">
            <my-button type="elevated" disabled>Disabled</my-button>
            <my-button type="filled" disabled>Disabled</my-button>
            <my-button type="filled-tonal" disabled>Disabled</my-button>
            <my-button type="outlined" disabled>Disabled</my-button>
            <my-button type="text" disabled>Disabled</my-button>
        </my-space>
        <my-space class="row" justify="space-between">
            <my-button type="elevated" disabled icon="add">Disabled</my-button>
            <my-button type="filled" disabled icon="add">Disabled</my-button>
            <my-button type="filled-tonal" disabled icon="add">Disabled</my-button>
            <my-button type="outlined" disabled icon="add">Disabled</my-button>
            <my-button type="text" disabled icon="add">Disabled</my-button>
        </my-space>
    </my-space>
</template>
<style lang="less">
.row {
    width: 40vw;
    min-width: 700px;
}
</style>

<script>
import MyButton from '../Button'
import MySpace from '../../space'

export default {
    name: 'ModifyColor',
    components: {
        MyButton,
        MySpace,
    },
}
</script>
