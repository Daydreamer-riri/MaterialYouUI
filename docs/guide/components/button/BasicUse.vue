<template>
    <div class="container exmaple-card">
        <div class="item">
            <span class="button-name">1</span>
            <div>
                <m-button type="elevated">Confirm</m-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">2</span>
            <div>
                <m-button type="filled">Confirm</m-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">3</span>
            <div>
                <m-button type="filled-tonal">Enabled</m-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">4</span>
            <div>
                <m-button type="outlined">Confirm</m-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">5</span>
            <div>
                <m-button type="text">Enabled</m-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../styles/exmapleCard.less';

.container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
}
.wrap {
    display: flex;
    justify-content: center;
}
.item {
    width: 134px;
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
    line-height: 24px;
    width: 24px;
    background: var(--md-color-on-surface);
    color: var(--md-color-surface);
}
</style>
<script>
import MButton from '@packages/button'
import Space from '@packages/space'
import Ripple from '@packages/ripple'

export default {
    name: 'BasicUse',
    components: {
        MButton,
        [Space.name]: Space,
    },
    directives: {
        Ripple,
    },
    setup() {},
}
</script>
