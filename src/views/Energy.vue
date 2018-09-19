<template>
    <div class="energy">
        <div class="energy__header">
            能源管理
        </div>

        <Row :gutter="10" >
            <Col :span="18">
                <div class="energy__left-top">
                </div>
                <div class="energy__left-bottom"></div>
            </Col>
            <Col :span="6">
                123
            </Col>
        </Row>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator'
    @Component
    export default class Energy extends Vue {

    }
</script>

<style lang="scss" >
    @import "~@/styles/mixin/index.scss";

    .energy {
        padding: 20px 25px;
        &__header {
            color: #fff;
            line-height: px2vh(24px);
            font-size: 14px;
            border-left: 5px solid #338cf0;
            padding-left: 10px;
        }
        &__left-top {
            height: px2vh(180px);
            margin-top: px2vh(24px);
            border: solid 1px rgba(74,137,223, .5);
        }

        &__left-bottom {
            height: px2vh(685px);
            margin-top: px2vh(24px);
            border: solid 1px rgba(74,137,223, .5);
        }
    }

</style>