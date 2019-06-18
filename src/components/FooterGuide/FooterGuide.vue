<template>
 <footer class="footer_guide border-1px">
  <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
    <span class="item_icon">
      <!-- <i class="iconfont icon-waimai"></i> -->
      <i class="iconfont icon-index"></i>
    </span>
    <span>首页</span>
  </a>
  <a href="javascript:;" class="guide_item" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
    <span>分类</span>
  </a>
  <a href="javascript:;" class="guide_item" @click="goto('/topic')" :class="{on: isCurrent('/topic')}">
    <span class="item_icon">
      <i class="iconfont icon-topic"></i>
    </span>
    <span>识物</span>
  </a>
  <a href="javascript:;" class="guide_item" @click="goto('/carts')" :class="{on: isCurrent('/carts')}">
    <span class="item_icon">
      <i class="iconfont icon-cart"></i>
    </span>
    <span>购物车</span>
  </a>
  <a href="javascript:;" class="guide_item" @click="goto('/personal')" :class="{on: isCurrent('/personal')}">
    <span class="item_icon">
      <i class="iconfont icon-gerenkongxin"></i>
    </span>
    <span>个人</span>
  </a>
</footer>
</template>

<script type="text/ecmascript-6">
 export default {
    methods: {
     goto(path) {//底部导航点击事件
       this.$router.replace(path)
     },
     isCurrent(path) {//动态绑定底部导航是否高亮
       return this.$route.path === path
     }
   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 750px
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 13px 5px
      color #999999
      &.on
        color red
      span
        font-size 24px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 39.98px
</style>