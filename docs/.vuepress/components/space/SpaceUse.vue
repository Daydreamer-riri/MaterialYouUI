<template>
    <div class="container">
        <my-space>
            <my-button>Button</my-button>
            <my-button>Button</my-button>
            <my-button>Button</my-button>
        </my-space>
    </div>
</template>

<script>
import MyButton from '../../../../packages/button'
import MySpace from '../../../../packages/space'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        MyButton,
        MySpace,
    },
})
</script>

<style></style>
