<template>
  <div>
    <!--<myHeader></myHeader>-->
    <div style="margin: 20px"> iView版本 2.8.0 </div>
    <div class="carousel-test">
      <div>1,Carousel 走马灯控件（Chrome上图片轮播正常，Safari上异常，如下）</div>
      <loop-image></loop-image>
    </div>
    <div class="select-test">
      <div>2,Tabs、Select 控件（Tabs中使用Select Safari上展示异常）</div>
      <div>

        <Tabs value="1">
          <TabPane :label="'标题一'" name="0">
            <tab-item></tab-item>
          </TabPane>
          <TabPane :label="'标题二'" name="1">
            <tab-item></tab-item>

          </TabPane>
          <TabPane :label="'标题三'" name="2">
            <tab-item></tab-item>

          </TabPane>
        </Tabs>
      </div>
    </div>


    <div class="i18n-test">
      <div>3,DatePicker、Page 控件（国际化（使用的是兼容 vue-i18n@6.x+的指导） 英文异常）
        <p>Page在 "vue-i18n": "^7.3.3" 情况下无法展示（vue-i18n 6.1.1版本时，Page切换和展示均正常）。</p>
        <p>DatePicker 国际化后直接无法正常展示 。</p>
      </div>
      <Button @click="switchLanguage('zh')">中文</Button>
      <Button @click="switchLanguage('en')">English</Button>
      <div style="margin-left: 20px;font-size: 16px;font-weight: bold">{{$t('message')}}</div>
      <Row>
        <Col span="12">
        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
      <Page :total="100" show-elevator></Page>
      <div style="height: 400px;width: 100%;background-color: cornflowerblue"></div>
    </div>

    <myFooter></myFooter>
  </div>
</template>
<script type="text/javascript">
  import myHeader from '../components/header.vue'
  import myFooter from '../components/footer.vue'
  import loopImage from '../components/loopImage.vue'
  import tabItem from '../components/TabItem.vue'

  export default {
    components: {
      myHeader,
      myFooter,
      loopImage,
      tabItem
    },

    data () {
      return {
      }
    },
    methods: {
      switchLanguage (lang) {
        this.$i18n.locale = lang
        window.localStorage.setItem('language', lang)
      }
    }
  }
</script>

<style>
  .carousel-test{
    margin: 20px;
    background-color: antiquewhite;
    font-size: 16px;
  }

  .select-test{
    margin: 20px;
    background-color: #aaa;
    height: 300px;
    font-size: 16px;

  }

  .i18n-test{
    margin: 20px;
    background-color: silver;
    font-size: 16px;

  }
</style>
