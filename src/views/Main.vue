<template>
    <div class="page-main">
        <h1>智慧实验室管理平台</h1>
        <wrapper class="main-wrapper">
            <div slot="content">
                <Row  :gutter="20" >

                </Row>
            </div>
        </wrapper>
    </div>
</template>

<script>

    import { Vue, Component } from 'vue-property-decorator'
    import wrapper from '@/components/Wrapper'

    @Component({
        components: {
            wrapper
        }
    })
    export default class Main extends Vue {

    }

</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin/index.scss";

    .page-main {
        background: url("~@/assets/images/bg.png") no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
        height: 100%;

        .main-wrapper {
            height: px2vh(1060px);
            margin-top: px2vh(20px);
        }

        h1 {
            text-align: center;
            color: #fff;
            font-size: 36px;
            font-weight: normal;
            position: absolute;
            width: 100%;
        }
    }

</style>