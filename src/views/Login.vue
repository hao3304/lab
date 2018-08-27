<template>
    <div class="login">
        <wrapper>
            <div slot="content" style="height: 100%;overflow: hidden">
                <h5 class="title"></h5>
                <div class="login-wrapper">
                    <div class="login-form">

                    </div>
                </div>
            </div>
        </wrapper>
    </div>
</template>
<script>
    import { Vue, Component } from 'vue-property-decorator'
    import wrapper from '@/components/Wrapper.vue'

    @Component({
        components: {
            wrapper
        }
    })
    export default class Login extends Vue {
    }
</script>
<style lang="scss">
    @import "~@/styles/mixin/index.scss";

    .login {
        height: 100%;
        background: url("~@/assets/images/bg.png") no-repeat;
        background-size: 100% 100%;

        .title {
            margin: px2vh(202px) auto 0 auto;
            width: 588px;
            height: px2vh(80px);
            background: url("~@/assets/images/sys_title.png") no-repeat;
            background-size: 100%;
        }

        .login-form {
            width: 744px;
            height: px2vh(540px);
            margin-top: px2vh(80px);
            margin-left: auto;
            margin-right: auto;
            background: url("~@/assets/images/login_form.png") no-repeat;
            background-size: 100% 100%;
        }



    }
</style>