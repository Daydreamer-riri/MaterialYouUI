<template>
    <div class="container exmaple-card">
        <div class="item">
            <div>
                <m-button type="elevated" :ripple="false">no ripple</m-button>
            </div>
            <span class="button-name">1</span>
        </div>
        <div class="item">
            <div>
                <m-button type="filled" :ripple="false">no ripple</m-button>
            </div>
            <span class="button-name">2</span>
        </div>
        <div class="item">
            <div>
                <m-button type="filled-tonal" :ripple="false">no ripple</m-button>
            </div>
            <span class="button-name">3</span>
        </div>
        <div class="item">
            <div>
                <m-button type="outlined" :ripple="false">no ripple</m-button>
            </div>
            <span class="button-name">4</span>
        </div>
        <div class="item">
            <div>
                <m-button type="text" :ripple="false">no ripple</m-button>
            </div>
            <span class="button-name">5</span>
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
    line-height: 24px;
    height: 24px;
    width: 24px;
    background: var(--md-color-on-surface);
    color: var(--md-color-surface);
}
</style>
<script setup>
import vRipple from '@packages/ripple'
import MButton from '@packages/button'
</script>
