<template>
    <div class="wrapper-block">
        <slot name="content"></slot>
    </div>
</template>
<script>
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class Wrapper extends Vue {

    }
</script>
<style lang="scss" scoped>
    .wrapper-block {
        height: 100%;
        position: relative;
        background-image: url("~@/assets/images/block_border.png");
        background-size: 100% 100%;
        overflow: hidden;
    }
</style>