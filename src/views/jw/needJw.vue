<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="need">
        <div class="content">
          <div class="title">富邦百万医疗投保须知</div>
          <div class="des">为了保证被保险人权益不受影响，请完整阅读以下内容</div>
        </div>
        <div class="list" ref="need">
          <div class="imgList">
            <img class="img" src="../../assets/jingwai/fxyjingwaiyouxuzhi1.png" mode="widthFix">
            <img class="img" src="../../assets/jingwai/fxyjingwaiyouxuzhi2.png" mode="widthFix">
            <img class="img" src="../../assets/jingwai/fxyjingwaiyouxuzhi3.png" mode="widthFix">
            <img class="img" src="../../assets/jingwai/fxyjingwaiyouxuzhi4.png" mode="widthFix">
            <img class="img" src="../../assets/jingwai/fxyjingwaiyouxuzhi5.png" mode="widthFix">
          </div>
        </div>
        <div class="btn" :class="{enble: enble}">我已仔细阅读全部内容</div>
      </div>
    </div>
    <div class="mask"></div>
    <video id="awesome" width="375" height="667" controls autoplay loop></video>
    <track-button @click="begin" :loading="loading"></track-button>
  </div>
</template>

<script>
import { replay } from '@/mixin/mixin.js'
  export default {
    mixins: [replay]
  }
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    min-height: 800px;
    .mask {
      width: 375px;
      height: 645px;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
    #awesome {
      float: right;
    }
    .pages {
      float: left;
      width: 375px;
      height: 645px;
      font-size: 14px;
      background-color: #F7F7F7;
      border: 1px solid #000;
      .need {
        height: 100%;
        overflow-y: auto;
        .content {
          .title {
            height: 44px;
            font-size: 16px;
            line-height: 44px;
            text-align: center;
            background-color: #ffffff;
          }
          .des {
            height: 34px;
            font-size: 13px;
            line-height: 34px;
            padding: 0 15px;
            background-color: #e5e5e5;
          }
        }
        .list::-webkit-scrollbar {
          display: none;
        }
        .list {
          height: calc(100% - 121px);
          overflow-y: auto;
          position: relative;
          .imgList {
            position: absolute;
            left: 0;
            .img {
              width: 100%;
            }
          }
        }
        .btn {
          height: 43px;
          background-color: #eee;
          text-align: center;
          line-height: 43px;
        }
        .enble {
          background-color: #007BD9 !important;
          color: #ffffff;
        }
      }
    }
  }
</style>
