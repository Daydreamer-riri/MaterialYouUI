<template>
    <div class="container">
        <div class="screen">
            <img src="/img/chip/assist.png" alt="" class="top-img" />
            <div class="spacer"></div>
            <m-space direction="column" :size="[0, 0]" style="padding-inline: 16px">
                <div class="title-large" style="margin-bottom: 4px">Welcome Home</div>
                <div class="body-medium">Monday, 12:30 PM, Mostly Sunny</div>
                <div class="body-medium" style="display: flex; align-items: center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                        enable-background="new 0 0 32 32"
                        xml:space="preserve"
                        id=""
                        focusable="false"
                        role="presentation"
                        aria-hidden="true"
                        style="width: 24px; height: 24px; margin-right: 8px"
                    >
                        <title></title>
                        <path
                            class="hcFill1 hcStroke1 hpFill1 hpStroke2 thFill1 thStroke1"
                            fill="#FBE000"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            d="M16 9.06 c-3.83 0-6.94 3.11-6.94 6.94c0 3.83 3.11 6.94 6.94 6.94s6.94-3.11 6.94-6.94C22.94 12.17 19.83 9.06 16 9.06z"
                        ></path>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="16"
                            y1="1.25"
                            x2="16"
                            y2="5.75"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="16"
                            y1="26.25"
                            x2="16"
                            y2="30.75"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="5.52"
                            y1="5.52"
                            x2="8.7"
                            y2="8.7"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="23.3"
                            y1="23.3"
                            x2="26.48"
                            y2="26.48"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="1.25"
                            y1="16"
                            x2="5.75"
                            y2="16"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="26.25"
                            y1="16"
                            x2="30.75"
                            y2="16"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="5.52"
                            y1="26.48"
                            x2="8.7"
                            y2="23.3"
                        ></line>
                        <line
                            class="hcStroke1 hpStroke2 thStroke1"
                            fill="none"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            x1="23.3"
                            y1="8.7"
                            x2="26.48"
                            y2="5.52"
                        ></line>
                    </svg>
                    81°/ 62°
                </div>
                <m-divider style="margin-block: 16px"></m-divider>
            </m-space>
            <!-- <div class="spacer"></div> -->
            <div class="group">
                <m-space :wrap="false" style="flex-shrink: 0; height: 32px">
                    <m-chip icon="lightbulb">Turn on lights</m-chip>
                    <m-chip icon="alarm">Set alarm</m-chip>
                    <m-chip icon="blinds">Close Shades</m-chip>
                </m-space>
            </div>
            <div class="spacer"></div>

            <div class="bar"></div>
        </div>
    </div>
</template>

<script setup>
import MChip from '@packages/chip'
import MSpace from '@packages/space'
import MDivider from '@packages/divider'
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface4);
    border-radius: 13px;
    padding-block-end: 40px;

    .screen {
        position: relative;
        box-sizing: border-box;
        // height: 200px;
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        background-color: var(--md-color-surface);
        border: solid rgba(0, 0, 0, 0.4) 6px;
        border-top: none;
        border-radius: 0 0 20px 20px;

        .top-img {
            height: 70px;
            width: 100%;
            object-fit: cover;
            border-radius: 0 0 20px 20px;
        }

        .group {
            display: inline-flex;
            overflow-x: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            box-sizing: border-box;
            width: 100%;
            padding-inline: 16px;
            height: 48px;
        }

        .spacer {
            height: 16px;
        }

        .bar {
            position: absolute;
            bottom: 8px;
            left: 0;
            right: 0;
            margin-inline: auto;
            width: 60px;
            height: 2px;
            background: var(--md-color-on-surface-variant);
        }
    }
}
</style>
