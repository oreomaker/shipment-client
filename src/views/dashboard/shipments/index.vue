<template>
  <div class="container">
    <Breadcrumb :items="['工作台', '订单物流']" />
    <a-spin :loading="loading" style="width: 100%">
      <a-card class="general-card">
        <template #title>
          {{ '订单物流' }}
        </template>
        <a-table
          row-key="id"
          :loading="loading"
          :columns="columns as TableColumnData[]"
          :data="tableData"
          :row-selection="rowSelection as TableRowSelection"
        >
          <template #status="{ record }">
            <a-tag :color="statusColorMap[record.orderStatus as OrderStatus]">
              {{ statusMap[record.orderStatus as OrderStatus] }}
            </a-tag>
          </template>
          <template #operation="{ record }">
            <a-space>
              <a-button size="mini" @click="handleDetails(record.shipments)"
                >查看详情</a-button
              >
            </a-space>
            <a-modal
              v-if="visible"
              :visible="visible"
              :hide-cancel="true"
              :closable="false"
              @ok="handleOk"
              @cancel="handleOk"
            >
              <template #title> 物流详情 </template>
              <a-timeline v-if="visible" :reverse="false">
                <a-timeline-item
                  v-for="item in shipmentsData"
                  :key="item.id"
                  :label="item.time"
                >
                  {{ item.description }}
                  <a-tag
                    :color="shipmentTypeColorMap[item.type as ShipmentType]"
                  >
                    {{ shipmentTypeMap[item.type as ShipmentType] }}
                  </a-tag>
                </a-timeline-item>
              </a-timeline>
            </a-modal>
          </template>
        </a-table>
      </a-card>
    </a-spin>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { TableColumnData, TableRowSelection } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';
  import {
    getAllOrders,
    OrderInfo,
    OrderStatus,
    ShipmentData,
    ShipmentType,
  } from '@/api/shipment';

  const visible = ref(false);
  const { loading, setLoading } = useLoading(true);
  const tableData = ref([] as OrderInfo[]);

  const columns = computed(() => {
    return [
      {
        title: '订单号',
        dataIndex: 'id',
      },
      {
        title: '货品名称',
        dataIndex: 'cargo.name',
      },
      {
        title: '发货地址',
        dataIndex: 'fromAddress',
      },
      {
        title: '收货地址',
        dataIndex: 'toAddress',
      },
      {
        title: '发货人',
        dataIndex: 'senderName',
      },
      {
        title: '发货人联系方式',
        dataIndex: 'senderPhone',
      },
      {
        title: '收货人',
        dataIndex: 'receiverName',
      },
      {
        title: '收货人联系方式',
        dataIndex: 'receiverPhone',
      },
      {
        title: '订单状态',
        slotName: 'status',
      },
      {
        title: '操作',
        slotName: 'operation',
      },
    ];
  });
  const statusColorMap = reactive({
    PENDING: 'blue',
    DELIVERING: 'green',
    DELIVERED: 'gray',
  });
  const statusMap = reactive({
    PENDING: '待发货',
    DELIVERING: '运输中',
    DELIVERED: '已签收',
  });
  const shipmentTypeColorMap = reactive({
    ORDER: 'blue',
    PROCESSING: 'gray',
    IN_TRANSIT: 'gray',
    DELIVERED: 'blue',
  });
  const shipmentTypeMap = reactive({
    ORDER: '下单',
    PROCESSING: '揽收',
    IN_TRANSIT: '运输中',
    DELIVERED: '签收',
  });

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllOrders();
    tableData.value = data.data;
    setLoading(false);
  };

  let shipmentsData = reactive([] as ShipmentData[]);
  const handleDetails = (shipments: ShipmentData[]) => {
    shipmentsData = shipments;
    visible.value = true;
  };

  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });

  const handleOk = () => {
    visible.value = false;
  };

  fetchData();
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px;
  }

  .des-filter {
    padding: 20px;
    background: var(--color-bg-5);
    border: 1px solid var(--color-neutral-3);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }

  .des-filter-footer {
    display: flex;
    justify-content: space-between;
  }
</style>
