<template>
  <a-card class="general-card" style="width: 100%" title="订单详情">
    <a-descriptions :data="data" />
    <a-collapse
      :default-active-key="['1']"
      :bordered="false"
      expand-icon-position="right"
      style="width: 200px"
    >
      <a-collapse-item>
        <template #header>
          预估费用
          <a-statistic
            :value="13"
            show-group-separator
            :value-style="{ color: '#165DFF' }"
          >
            <template #suffix> 元起 </template>
          </a-statistic>
        </template>
        <template #expand-icon>
          <icon-plus />
        </template>
        <div>基础运费</div>
        <div>计费方式</div>
        <div>附加费</div>
      </a-collapse-item>
    </a-collapse>
  </a-card>
  <a-space :size="16" style="margin-top: 40px">
    <a-button key="agian" @click="goPrev"> 上一步 </a-button>
    <a-button key="agian" type="primary" @click="oneMore"> 立即下单 </a-button>
  </a-space>
</template>

<script setup lang="ts">
  const emits = defineEmits(['changeStep']);
  const goPrev = () => {
    emits('changeStep', 'backward');
  };
  const oneMore = () => {
    emits('changeStep', 'forward', {});
  };

  const data = [
    {
      label: 'Name',
      value: 'Socrates',
    },
    {
      label: 'Mobile',
      value: '123-1234-1234',
    },
    {
      label: 'Residence',
      value: 'Beijing',
    },
    {
      label: 'Hometown',
      value: 'Beijing',
    },
    {
      label: '预估费用',
      value: '13',
    },
  ];
</script>
