<template>
    <div class="container">
        <div class="screen">
            <div class="title title-small">General</div>
            <div class="content">
                <m-space direction="column" :size="[24, 0]" class="spans">
                    <span>Wi-Fi</span>
                    <span>Bluetooth</span>
                    <span>Do not disturb</span>
                    <span>Airpline mode</span>
                </m-space>
                <m-space direction="column" :size="[24, 0]">
                    <m-switch checked-value="Wi-Fi" v-model="model"></m-switch>
                    <m-switch checked-value="Bluetooth" v-model="model"></m-switch>
                    <m-switch checked-value="Do not disturb" v-model="model"></m-switch>
                    <m-switch checked-value="Airpline mode" v-model="model"></m-switch>
                </m-space>
            </div>
        </div>
    </div>
    <p>
        Filter chip group 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script setup>
import { ref } from 'vue'
import MSpace from '../../../../packages/space'
import MSwitch from '../../../../packages/switch'
import MButton from '../../../../packages/button'

const model = ref([])
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding-inline: 16px;

    .screen {
        position: relative;
        box-sizing: border-box;
        // height: 200px;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        background-color: var(--md-color-surface);
        border: solid rgba(0, 0, 0, 0.4) 6px;
        border-block: none;
        padding-inline: 24px;
        padding-block: 16px 36px;
        color: var(--md-color-on-surface);

        .title {
            color: var(--md-color-primary);
            margin-bottom: 28px;
        }

        .content {
            display: flex;
            justify-content: space-between;
        }

        .spans {
            span {
                height: 52px;
                line-height: 32px;
            }
        }
    }
}
</style>
