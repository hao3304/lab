<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
  @import "~@/styles/mixin/index.scss";
  #app {
    height: 100%;
  }

  .ivu-tag-primary {
    .ivu-tag-text {
      color: #fff;
    }
  }

  .row__item {
    border: 1px solid #363c84;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-header {
      height: px2vh(42px);
      line-height: px2vh(42px);
      color: #01efbb;
      padding: 0 30px;
      font-weight: normal;
      border-bottom: 1px solid #363c84;
      box-sizing: border-box;
    }

    &-content {
      flex: 1;
      &-echart{
        width:100%;
        height:100%;
      }
    }
  }

</style>
