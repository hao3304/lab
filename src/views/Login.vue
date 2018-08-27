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
    .login {
        height: 100%;
        background-image: url("~@/assets/images/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .title {
            margin: 202px auto 0 auto;
            width: 588px;
            height: 80px;
            background: url("~@/assets/images/sys_title.png") no-repeat;
            background-size: 100%;
        }

        .login-form {
            width: 744px;
            height: 50vh;
            margin-top: 80px;
            margin-left: auto;
            margin-right: auto;
            background: url("~@/assets/images/login_form.png") no-repeat;
            background-size: 100% 100%;
        }



    }
</style>