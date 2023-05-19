<template>
  <div class="success-wrap">
    <a-result
      status="success"
      title="成功下单"
      subtitle="物流人员将会联系取货，可前往物流发货页面查看物流详情"
    />
    <a-space :size="16">
      <a-button key="view" type="primary" @click="oneMore"> 完成 </a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
  const emits = defineEmits(['changeStep']);
  const oneMore = () => {
    emits('changeStep', 1);
  };
</script>

<style scoped lang="less">
  .success-wrap {
    text-align: center;
  }
  :deep(.arco-result) {
    padding-top: 0;
  }
</style>
