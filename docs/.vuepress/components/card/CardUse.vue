<template>
    <div class="container">
        <m-card type="outlined" :style="{ width: '360px' }">
            <template #image>
                <img class="card-img" src="../../public/img/card/Placeholder.png" />
            </template>
            <template #title>Title</template>
            <template #subhead>Subhead</template>
            <template #text>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elt, sed do eiusmod tempor
            </template>
            <template #action>
                <m-space justify="end">
                    <m-button type="outlined">Enabled</m-button>
                    <m-button>Enabled</m-button>
                </m-space>
            </template>
        </m-card>
        ---
        <m-card type="elevated" :style="{ width: '360px' }">
            <template #image>
                <img class="card-img" src="../../public/img/card/Placeholder.png" />
            </template>
            <template #title>Title</template>
            <template #subhead>Subhead</template>
            <template #text>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elt, sed do eiusmod tempor
            </template>
            <template #action>
                <m-space justify="end">
                    <m-button type="outlined">Enabled</m-button>
                    <m-button>Enabled</m-button>
                </m-space>
            </template></m-card
        >
        ---
        <m-card type="filled" :style="{ width: '360px' }">
            <template #image>
                <img class="card-img" src="../../public/img/card/Placeholder.png" />
            </template>
            <template #title>Title</template>
            <template #subhead>Subhead</template>
            <template #text>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elt, sed do eiusmod tempor
            </template>
            <template #action>
                <m-space justify="end">
                    <m-button type="outlined">Enabled</m-button>
                    <m-button>Enabled</m-button>
                </m-space>
            </template>
        </m-card>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface1);
    padding: 80px;
}

.card-img {
    border-radius: 12px;
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MSpace from '@packages/space'
import MButton from '@packages/button'
</script>
