<template>
  <div>
    <div class="page-part">
        <span>2月13日</span>
        <span>周二</span>
        <mt-radio
        v-model="value"
        :options="['选项A', '选项B', '选项C']">
        </mt-radio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>

</style>
