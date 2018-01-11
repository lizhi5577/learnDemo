<template>
    <div >
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div style="height: 200px;width: 50%;background-color: coral;text-align: right">
        <Poptip
          confirm
          title="Are you sure delete this task?"
          @on-ok="ok"
          @on-cancel="cancel"
          ok-text="yes"
          cancel-text="no">
          <Button>国际化</Button>
        </Poptip>
      </div>
    </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    }
  }
</script>

<style>
</style>
