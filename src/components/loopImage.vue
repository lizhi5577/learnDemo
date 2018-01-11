<template>
  <Carousel class="loop" autoplay radiusDot v-model="value" loop >
    <CarouselItem >
      <div class="item">
        <img src="http://static.yxmarine.com/main/ad1.jpg"/>
      </div>
    </CarouselItem>
    <CarouselItem >
      <div class="item">
        <img src="http://static.yxmarine.com/main/ad2.jpg"/>
      </div>
    </CarouselItem>
    <CarouselItem >
      <div class="item">
        <img src="http://static.yxmarine.com/main/ad3.jpg"/>
      </div>
    </CarouselItem>
    <CarouselItem >
      <div class="item">
        <img src="http://static.yxmarine.com/main/ad4.jpg"/>
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .loop{
    height: 100%;
    width: 100%;
    border: solid 1px #666;
    .item{
      height: 460px;
      width: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }

  }

</style>
