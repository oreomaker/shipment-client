<template>
  <a-card class="general-card" style="width: 100%" title="订单详情">
    <a-descriptions :loading="loading" :data="data" />
    {{ shipOrderData }}
    {{ orderPrice }}
    <a-collapse
      :loading="loading"
      :default-active-key="['1']"
      :bordered="false"
      expand-icon-position="right"
      style="width: 200px"
    >
      <a-collapse-item>
        <template #header>
          预估费用
          <a-statistic
            :value="orderPrice.price"
            show-group-separator
            :value-style="{ color: '#165DFF' }"
          >
            <template #suffix> 元起 </template>
          </a-statistic>
        </template>
        <template #expand-icon>
          <icon-plus />
        </template>
        <div>基础运费: {{ orderPrice.basePrice }}</div>
        <div>计费方式: {{ orderPrice.pricingType }}</div>
        <div>附加费: {{ orderPrice.surcharge }}</div>
      </a-collapse-item>
    </a-collapse>
  </a-card>
  <a-space :size="16" style="margin-top: 40px">
    <a-button key="agian" @click="goPrev"> 上一步 </a-button>
    <a-button key="agian" type="primary" @click="oneMore"> 立即下单 </a-button>
  </a-space>
</template>

<script setup lang="ts">
  import { useShipmentStore } from '@/store';
  import {
    ShipOrderData,
    getShipOrderPrice,
    createShipOrder,
    OrderPrice,
  } from '@/api/shipment';
  import { reactive, ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import Message from '@arco-design/web-vue/es/message';

  const { loading, setLoading } = useLoading();

  const shipmentStore = useShipmentStore();
  const shipOrderData = reactive(shipmentStore.shipOrder as ShipOrderData);
  let orderPrice = reactive({} as OrderPrice);

  const getPrice = async (data: ShipOrderData) => {
    setLoading(true);
    const res = await getShipOrderPrice(data);
    orderPrice = res.data;
    setLoading(false);
  };

  getPrice(shipOrderData);

  const emits = defineEmits(['changeStep']);
  const goPrev = () => {
    emits('changeStep', 'backward');
  };
  const oneMore = async () => {
    setLoading(true);
    await createShipOrder(shipOrderData);
    await shipmentStore.initShipOrder();
    Message.success('成功下单');
    setLoading(false);
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
