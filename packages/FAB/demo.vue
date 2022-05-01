<template>
    <div class="container">
        <div class="screen" ref="screen">
            <div class="content" @wheel="clickhandle" @touchmove="clickhandle">
                <li v-for="item in items">{{ item }}</li>
            </div>
            <m-fab name="add" class="efab" :extended="state" @click="clickhandle">
                <template #text>New task</template>
            </m-fab>
        </div>
    </div>
</template>
<script lang="ts">
import MFab from '@packages/FAB'
import { ref, onMounted, defineComponent } from 'vue'
import type { Ref } from 'vue'
export default defineComponent({
    components: { MFab },
    setup() {
        const items: string[] = []
        for (let i = 0; i < 100; i++) {
            items.push('item' + i)
        }

        let oldTop = 0

        const state = ref(true)

        const screen: Ref<HTMLDivElement | null> = ref(null)

        // onMounted(() => {
        //     console.log(screen.value)
        //     if (screen.value !== null) {
        //         screen.value.addEventListener('scroll', (e) => {
        //             let top = screen.value?.scrollTop
        //             if (top == null) return
        //             if (top - oldTop > 90) {
        //                 state.value = false
        //                 oldTop = top
        //                 console.log('change')
        //             } else if (top - oldTop < -99) {
        //                 state.value = true
        //                 oldTop = top
        //             }
        //         })
        //     }
        // })

        // const handle = (e: any) => {
        //     if (e !== null) {
        //         let top = e.target.scrollTop
        //         console.log(top)
        //         if (top - oldTop > 90) {
        //             state.value = false
        //             oldTop = top
        //             console.log('change')
        //         } else if (top - oldTop < -99) {
        //             state.value = true
        //             oldTop = top
        //         }
        //     }
        // }
        const clickhandle = (e: any) => {
            let top: any = screen.value?.scrollTop
            if (top - oldTop > 90) {
                state.value = false
                oldTop = top
                console.log('change')
            } else if (top - oldTop < -99) {
                state.value = true
                oldTop = top
            }
        }
        return {
            state,
            items,
            screen,
            clickhandle,
        }
    },
})
</script>
<style lang="less">
.container {
    position: relative;
    padding: 80px 80px 120px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--md-color-surface1);

    .screen {
        position: relative;
        width: 375px;
        height: 667px;
        border: 3px solid var(--md-color-outline);
        border-radius: 13px;
        background-color: var(--md-color-surface);
        overflow: auto;

        .content {
            padding: 0 10px;
        }

        .efab {
            position: sticky;
            bottom: 16px;
        }
    }
}
</style>
