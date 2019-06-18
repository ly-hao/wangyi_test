<template>
  <div class="swiper-nav">
    <div class="swiper-container ">
      <div class="swiper-wrapper ">
        <div class="swiper-slide ">
          <a href="javascript:;">
            <img src="./img/swiper/1.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/2.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/3.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/4.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/5.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/6.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/7.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./img/swiper/8.jpg" alt="">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="grow">
      <ul class="growList">
        <li class="growItem">
          <a href="javascript:;">
            <i class="growImg"></i>
            <span class="text">网易自营品牌</span>
          </a>
        </li>
        <li class="growItem">
          <a href="javascript:;">
            <i class="growImg"></i>
            <span class="text">30天无忧退货</span>
          </a>
        </li>
        <li class="growItem">
          <a href="javascript:;">
            <i class="growImg"></i>
            <span class="text">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="containers">
      <div class="container-item">
        <div class="m-kingKongModule">
          <div class="m-carousel">
            <div class="wrapContainer">
              <ul class="wrap-list">
                <li class="wrap-item">
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/1.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/2.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/3.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/4.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/5.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/6.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/7.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/8.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/9.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                  <a class="kingkong-item" href="javascript:;">
                    <i class="icon">
                      <img src="./img/shop/9.png" alt="">
                    </i>
                    <span class="txt">新品首发</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="m-indexBigModule">
          <div class="floor">
            <a href="javacript:;" class="promItem prom-item">
              <div class="promGood">
                <img src="./img/prom/prom2.png" alt="">
              </div>
              <div class="priceWrap">
                <span class="retailPrice">￥129</span>
                <span class="counterPrice">￥99</span>
              </div>
            </a>
            <div class="m-countdown m-bigPromCountDown">
              <span class="hour">12</span>
              <span class="min">11</span>
              <span class="secs">00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
     mounted() {
      /* eslint-disable no-new */
      new Swiper('.swiper-container',{
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
        paginationType : 'custom'
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-nav
    width 750px
    height 370px
    box-sizing border-box
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          img 
            width 750px
            height 370px
    .grow
      background: #fff;
      .growList
        width: 100%
        height: 72px
        padding: 0 30px
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .growItem
          flex: 1;
          float: left;
          a
            color: #7e8c8d
            display: inline-block;
            height 32px 
            margin 2px 0
            .growImg
              display inline-block
              width 32px
              height 32px
              background-image url('./img/icon/page1.png')
              background-size 32px 32px
              vertical-align: middle;
            .text 
              display: inline-block;
              font-size: 24px
              color: #B4282D;
              margin-left: 8px
              line-height: 32px
              vertical-align: middle
    .m-kingKongModule
      width 750px
      height 372px
      background-image url('./img/shop/backs.png')
      background-size 100% 100%
      .m-carousel
        position relative
        .wrapContainer
          margin-left: auto
          margin-right: auto
          position: relative
          overflow: hidden
          z-index: 1
          padding-bottom 32px
          .wrap-list
            position relative
            z-index:1
            width 100%
            display flex
            box-sizing: content-box
            .wrap-item
              width 100%
              .kingkong-item
                    display: block;
                    width: 110px
                    height: 156px
                    float: left;
                    margin: 10px 20px 9px
                .icon
                  display block
                  width 110px
                  height 110px 
                  img
                    width 110px
                    height 110px 
                .txt
                  display block
                  width 100%
                  height 36px
                  font-size 24px
                  text-align center
                  margin-top 10px
                  color #333
                  line-height: 36px
                  white-space: nowrap
    .m-indexBigModule
      .floor
        width 750px
        height 280px
        display flex
        align-items center
        justify-content space-between 
        margin-bottom 20px
        position relative
        .promItem
          display flex
          align-items center
          justify-content center
          overflow hidden
          position relative
          height 100%
          color #333
          width 100%
        .prom-item
          background-image url('./img/shop/proms0.gif')
          background-size 100% 100% 
          .promGood
            position absolute
            top 40px
            right 80px
            img 
              width 168px
              height 168px
          .priceWrap
            position absolute
            right 90px
            bottom 80px
            width 152px
            height 32px
            line-height 32px
            color #fff
            background #f48f18
            border-radius 16px
            padding 0 7px
            text-align center
        .m-countdown
          background url('./img/prom/times.png')
        .m-bigPromCountDown
          display flex
          vertical-align middle
          width 446px    
          height 42px
          position absolute
          bottom 82px
          left 35px
          z-index 1
          background-repeat no-repeat
          background-size 100% 100%
          align-items center
          justify-content center
          .hour
            padding 0 10px
          .min
            padding 0 10px
          .secs
            padding 0 10px  
          
</style>
