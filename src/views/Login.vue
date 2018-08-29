<template>
    <div class="login">
        <wrapper>
            <div slot="content" style="height: 100%;overflow: hidden">
                <h5 class="title"></h5>
                <div class="login-wrapper">
                    <div class="login-form">
                        <div class="username-block">
                            <input type="text" name="username" v-model="form.username" >
                        </div>
                        <div class="password-block">
                            <input type="password" name="password" v-model="form.password" >
                        </div>

                        <div class="btn-block">
                            <a href="javascript:;" @click="onLogin" class="login-btn">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </wrapper>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import wrapper from '@/components/Wrapper.vue'
    import $router from '@/router'

    interface IForm {
        username: string
        password: string
    }

    @Component({
        components: {
            wrapper
        }
    })
    export default class Login extends Vue {
        public form: IForm = {
           username: 'admin',
           password: 'admin'
        }
        public onLogin(): void {
            $router.push('/main')
        }
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
            overflow: hidden;
            background: url("~@/assets/images/login_form.png") no-repeat;
            background-size: 100% 100%;

            .username-block,.password-block {
                margin-top: px2vh(188px);
                padding-left: 260px;

                input {
                    width: 300px;
                    font-size: 20px;
                    height: px2vh(45px);
                    color: #fff;
                    background-color: transparent;
                    border:none;
                }
            }

            .password-block {
                margin-top: px2vh(42px);
            }

            .btn-block{
                margin-top: px2vh(62px);
                text-align: center;
            }
            .login-btn {
                background: url("~@/assets/images/login_btn.png") no-repeat;
                background-size: 100% 100%;
                display: inline-block;
                width: 490px;
                height: px2vh(80px);
            }
        }



    }
</style>