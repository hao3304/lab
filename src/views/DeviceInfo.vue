<template>
    <div class="deviceinfo">
         <p class="deviceinfo__bread">设备管理>设备使用信息</p>
         <div class="deviceinfo__content">
             <div class="deviceinfo__content-search">
                 <div class="deviceinfo__content-search-item">
                     <div>
                         设备名称: 
                         <Input v-model="value"   style="width:auto;"/>
                     </div>   
                 </div>`
                  <div class="deviceinfo__content-search-item">
                      <div>
                         设备位置: 
                         <Input v-model="value"  style="width:auto;"/>
                     </div>
                 </div>
                  <div class="deviceinfo__content-search-item">
                      <div>
                         设备状态: 
                         <Input v-model="value"   style="width:auto;"/>
                     </div>
                 </div>
                 <div class="deviceinfo__content-search-btn">
                     <Button type="primary" size="small" style="margin-right:10px;">搜索</Button>
                     <Button type="primary" size="small">添加设备</Button>
                 </div>

             </div>
             <div class="deviceinfo__content-table">

             </div>
         </div>
    </div>
</template>

<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator'

    @Component

    export default class DeviceInfo extends Vue {
    
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    $breadHeight: px2vh(40px);

    .deviceinfo{
        height: 100%;
        box-sizing: border-box;
        padding: 15px 25px;
        &__bread{
            color:#fff;
            font-size: 14px;
            height: px2vh(20px);
            line-height: px2vh(20px);
            margin-bottom: px2vh(20px);
            &:before{
                display: block;
                float: left;
                content:'';
                height:100%;
                margin-right:6px;
                border-left:6px solid #4a89df;
            }
        }

        &__content{
            height:  calc(100% - #{$breadHeight}); 
            display: flex;
            flex-flow: column nowrap;
            &-search{
                height: px2vh(60px);
                border: 1px solid #363c84;
                flex-shrink: 0;

                &-item{
                    width:20%;
                    float: left;
                    padding-left:40px;
                    &>div{
                        line-height: px2vh(60px);
                        color: #fff;
                    }
                }
                &-btn{
                    width:40%;
                    float: left;
                    padding-left:40px;
                    line-height: px2vh(60px);
                }
            }
            &-table{
                flex:1;
                margin-top: px2vh(20px);
                border: 1px solid #363c84;
            }
        }
    }
</style>
