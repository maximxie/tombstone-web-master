<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="逝者姓名">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="情感关系">
      <a-select v-model="form.region" placeholder="请选择情感关系">
        <a-select-option value="shanghai">
          纪念先组
        </a-select-option>
        <a-select-option value="beijing">
          纪念爷爷
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="出生日期">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="选择日期"
        style="width: 100%;"
      />
    </a-form-model-item>
    <a-form-model-item label="逝世日期">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="选择日期"
        style="width: 100%;"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary">
        创建纪念馆
      </a-button>
      <a-button style="margin-left: 10px;">
        取消
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  name: "add-from",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  }
}
</script>

<style scoped>

</style>
