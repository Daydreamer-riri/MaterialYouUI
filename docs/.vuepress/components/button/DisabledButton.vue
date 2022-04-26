<template>
    <div class="container exmaple-card">
        <div class="item">
            <span class="button-name">1</span>
            <div>
                <my-button type="elevated" disabled>Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">2</span>
            <div>
                <my-button type="filled" disabled>Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">3</span>
            <div>
                <my-button type="filled-tonal" disabled>Disabled</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">4</span>
            <div>
                <my-button type="outlined" disabled>Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">5</span>
            <div>
                <my-button type="text" disabled>Disabled</my-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../styles/exmapleCard.less';

.container {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
}
.wrap {
    display: flex;
    justify-content: center;
}
.item {
    width: 120px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.item button {
    flex-grow: 0;
}
.button-name {
    border-radius: 12px;
    text-align: center;
    display: block;
    height: 24px;
    width: 24px;
    background: var(--md-color-on-surface);
    color: var(--md-color-surface);
}
</style>
<script>
import Button from '../../../../packages/button/Button.vue'

export default {
    name: 'BasicUse',
    components: {
        [Button.name]: Button,
    },
    setup() {},
}
</script>
