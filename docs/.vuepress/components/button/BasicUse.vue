<template>
    <div class="container exmaple-card">
        <div class="item">
            <span class="button-name">1</span>
            <div>
                <my-button type="elevated">Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">2</span>
            <div>
                <my-button type="filled">Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">3</span>
            <div>
                <my-button type="filled-tonal">Enabled</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">4</span>
            <div>
                <my-button type="outlined">Confirm</my-button>
            </div>
        </div>
        <div class="item">
            <span class="button-name">5</span>
            <div>
                <my-button type="text">Enabled</my-button>
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
    width: 24px;
    background: var(--md-color-on-surface);
    color: var(--md-color-surface);
}
</style>
<script>
import MyButton from '../../../../packages/button'
import Space from '../../../../packages/space'

export default {
    name: 'BasicUse',
    components: {
        MyButton,
        [Space.name]: Space,
    },
    setup() {},
}
</script>
