<template>
  <div class="container">
    <Breadcrumb :items="['工作台', '创建订单']" />
    <a-spin style="width: 100%">
      <a-card class="general-card">
        <div class="wrapper">
          <a-steps
            v-model:current="step"
            label-placement="vertical"
            style="width: 580px"
            class="steps"
          >
            <a-step description="填写物流订单"> 物流订单 </a-step>
            <a-step description="查看订单"> 订单详情 </a-step>
            <a-step description="查看结果"> 结果 </a-step>
          </a-steps>
          <keep-alive>
            <OrderForm v-if="step === 1" @change-step="changeStep" />
            <PaymentCard v-else-if="step === 2" @change-step="changeStep" />
            <ResulResult v-else-if="step === 3" @change-step="changeStep" />
          </keep-alive>
        </div>
      </a-card>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import OrderForm from './components/order-form.vue';
  import PaymentCard from './components/payment-card.vue';
  import ResulResult from './components/order-result.vue';

  const step = ref(1);

  const changeStep = (direction: string | number) => {
    if (typeof direction === 'number') {
      step.value = direction;
      return;
    }

    if (direction === 'forward') {
      step.value += 1;
    } else if (direction === 'backward') {
      step.value -= 1;
    }
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    background-color: var(--color-bg-2);

    :deep(.arco-form) {
      .arco-form-item {
        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }

  .steps {
    margin-bottom: 40px;
  }
</style>
