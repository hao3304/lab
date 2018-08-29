<template>
    <div class="lab">
        <slider class="lab__slider"></slider>
        <div class="lab__main">
            <div class="lab__header">
                <div class="lab__header-param">
                    <span>2018-01-01 10:10</span>
                    <span>温度：26℃</span>
                    <span>湿度：73%</span>
                    <span>PM2.5：57</span>
                </div>
                <div class="lab__header-user">
                    <a href=""><Avatar icon="ios-person"/>&nbsp;&nbsp;张三</a>
                    <a href=""><Icon type="md-power" style="font-size: 24px" />&nbsp;&nbsp;退出</a>
                </div>
            </div>
            <div class="lab__content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator'
    import Slider from '@/components/Slider.vue'
    @Component({
        components: {
            Slider
        }
    })
    export default class Lab extends Vue {
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    .lab {
        display: flex;
        height: 100%;
        &__slider {
            width: 240px;
            background-color: #3a3f4e;
        }

        &__main {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        &__header {
            height: px2vh(70px);
            background-color: #23262e;
            display: flex;
            padding: 0 20px;

            &-param {
                flex: 1;
                line-height: px2vh(70px);
                color: #fff;
                font-size: 16px;
                span {
                    margin: 0 15px;
                }
            }
            &-user {
                width: 200px;
                display: flex;
                align-items: center;
                 a {
                     color: #fff;
                     display: inline-block;
                     width: 100px;
                     text-align: center;
                 }
                font-size: 16px;
            }
        }

        &__content {
            flex: 1;
            background: url("~@/assets/images/bg.png") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>