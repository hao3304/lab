<template>
    <div class="devicerecord">
        <p class="devicerecord__bread">设备管理>设备使用记录</p>
    </div>
</template>

<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator'

    @Component

    export default class DeviceRecord extends Vue {
    
    }
</script>

<style lang="scss">
      @import "~@/styles/mixin/index.scss";

    .devicerecord{
        height: 100%;
        box-sizing: border-box;
        padding: 15px 25px;
        &__bread{
            color:#fff;
            font-size:14px;
            height:1.5em;
            line-height: 1.5em;
            &:before{
                display: block;
                float: left;
                content:'';
                height:100%;
                margin-right:6px;
                border-left:6px solid #4a89df;
            }
        }
    }
</style>
