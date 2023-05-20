<template>
  <a-card class="general-card" style="width: 100%" title="发货人信息">
    <a-descriptions :loading="loading" :data="senderDesc" />
  </a-card>
  <a-card class="general-card" style="width: 100%" title="收货人信息">
    <a-descriptions :loading="loading" :data="receiverDesc" />
  </a-card>
  <a-card class="general-card" style="width: 100%" title="货物信息">
    <a-descriptions :loading="loading" :data="cargoDesc" />
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
            :precision="2"
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
  import { reactive } from 'vue';
  import useLoading from '@/hooks/loading';
  import Message from '@arco-design/web-vue/es/message';

  const { loading, setLoading } = useLoading();

  const shipmentStore = useShipmentStore();
  const shipOrderData = reactive(shipmentStore.shipOrder as ShipOrderData);
  let orderPrice = reactive({} as OrderPrice);

  const senderDesc = [
    {
      label: '发货人姓名',
      value: shipOrderData.sender.name,
    },
    {
      label: '发货人电话',
      value: shipOrderData.sender.phone,
    },
    {
      label: '发货地址',
      value: shipOrderData.sender.address,
    },
  ];
  const receiverDesc = [
    {
      label: '收货人姓名',
      value: shipOrderData.receiver.name,
    },
    {
      label: '收货人电话',
      value: shipOrderData.receiver.phone,
    },
    {
      label: '收货地址',
      value: shipOrderData.receiver.address,
    },
  ];
  const cargoDesc = [
    {
      label: '货物名称',
      value: shipOrderData.cargo.name,
    },
    {
      label: '货物重量(kg)',
      value: shipOrderData.cargo.weight.toString(),
    },
    {
      label: '货物体积(m³)',
      value: (
        shipOrderData.cargo.length *
        shipOrderData.cargo.width *
        shipOrderData.cargo.height
      ).toString(),
    },
  ];

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
</script>
