<template>
    <div class="container">
        <m-space direction="column" size="large">
            <m-card class="cardripple" type="filled" :style="{ width: '330px' }" v-ripple hoverable>
                <template #header>
                    <m-card-header head="Daniel Maas" subhead="Yesterday">
                        <template #avatar>
                            <div class="avatar"></div>
                        </template>
                        <template #extra>
                            <div class="extra">
                                <m-icon name="grade" stokeWidth="200" size="large"></m-icon>
                            </div>
                        </template>
                    </m-card-header>
                </template>
                <template #title>
                    <span class="headline6" style="color: var(--md-color-on-surface)">Clay pot fair on Saturday?</span>
                </template>
                <template #content>
                    I think it's time for us to finally try that new noodle shop downtown that dosen't use menus. Anyone
                    els...
                </template>
            </m-card>
        </m-space>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface1);
    padding: 40px 0 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;

    .cardripple {
        user-select: none;
        cursor: pointer;

        .extra {
            background: var(--md-color-surface);
            height: 44px;
            width: 44px;
            border-radius: 22px;
            display: grid;
            place-items: center;
        }
        .avatar {
            height: 44px;
            width: 44px;
            border-radius: 22px;
            background: url('/img/card/avatar.jpg') center/cover;
        }
    }
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MCardHeader from '@packages/card-header'
import MSpace from '@packages/space'
import MButton from '@packages/button'
import MIcon from '@packages/icon'
import vRipple from '@packages/ripple'
</script>
